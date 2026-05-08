import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, BadgeCheck, Shield, Phone, ChevronLeft, ChevronRight, Quote, Users, MapPin, Zap, Clock } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carlos Eduardo Mendes",
    location: "São Paulo, SP",
    vehicle: "Toyota Corolla 2022",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/c968fbf0e_generated_5b55b6e7.png",
    text: "Depois que entrei para a associação fiquei muito mais tranquilo. Meu carro foi roubado e em menos de 30 dias recebi **100% da tabela FIPE**. Atendimento **rápido, humano e eficiente**. Nunca mais vou ficar sem proteção veicular.",
    highlight: "Recebeu 100% da FIPE",
    stars: 5,
  },
  {
    name: "Ana Beatriz Costa",
    location: "Belo Horizonte, MG",
    vehicle: "Honda Civic 2021",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/e712c9b4c_generated_e08bd889.png",
    text: "Economizei mais de **60% comparado ao seguro tradicional** e a cobertura é excelente. Quando precisei de guincho de madrugada, chegaram em menos de 40 minutos. **Atendimento 24h de verdade!** Recomendo para toda minha família.",
    highlight: "Economia de 60%",
    stars: 5,
  },
  {
    name: "Roberto Silva",
    location: "Rio de Janeiro, RJ",
    vehicle: "Fiat Strada 2023",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/b86a11022_generated_2f28478a.png",
    text: "Como motorista de aplicativo, meu carro é meu **sustento da família**. A proteção veicular me dá **segurança e tranquilidade** para trabalhar. O processo de adesão foi simples, sem burocracia e sem análise de perfil. Nota 10!",
    highlight: "Aprovação sem burocracia",
    stars: 5,
  },
  {
    name: "Fernanda Oliveira",
    location: "Curitiba, PR",
    vehicle: "Hyundai HB20 2022",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
    text: "Fui super bem atendida desde o primeiro contato. A equipe explicou tudo com calma, **sem letras miúdas ou surpresas**. Tive uma pane elétrica no meio da estrada e o socorro chegou rapidinho. **Proteção de verdade!**",
    highlight: "Suporte transparente",
    stars: 5,
  },
  {
    name: "Marcelo Souza",
    location: "Brasília, DF",
    vehicle: "Chevrolet Onix 2023",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    text: "Já indiquei para mais de 10 amigos e todos ficaram satisfeitos. O **custo-benefício é incomparável** — pago um valor justo e tenho cobertura completa em todo o Brasil. A **paz de espírito** que isso traz não tem preço.",
    highlight: "Indicou para 10 amigos",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    location: "Porto Alegre, RS",
    vehicle: "Volkswagen T-Cross 2022",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    text: "Tive uma colisão na rodovia e fiquei desesperada. A equipe me atendeu com **muita empatia e rapidez**. Todo o processo foi resolvido de forma **transparente e ágil**. Hoje me sinto protegida onde quer que eu vá no Brasil.",
    highlight: "Atendimento com empatia",
    stars: 5,
  },
];

const TRUST_STATS = [
  { icon: Users, value: "+5.000", label: "Clientes Protegidos" },
  { icon: MapPin, value: "Todo Brasil", label: "Cobertura Nacional" },
  { icon: Zap, value: "Rápido", label: "Suporte Ágil" },
  { icon: Clock, value: "24h", label: "Proteção Contínua" },
];

function parseText(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
        >
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative flex flex-col h-full rounded-2xl overflow-hidden group"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.025) 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Top glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Highlight badge */}
      <div className="absolute top-4 right-4">
        <div
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold"
          style={{
            background: "rgba(250,204,21,0.15)",
            border: "1px solid rgba(250,204,21,0.3)",
            color: "#FACC15",
          }}
        >
          <BadgeCheck className="w-3 h-3" />
          {t.highlight}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Quote icon */}
        <Quote
          className="w-8 h-8 mb-4 flex-shrink-0"
          style={{ color: "rgba(37,99,235,0.4)" }}
        />

        {/* Stars */}
        <StarRow count={t.stars} />

        {/* Text */}
        <p className="mt-4 text-white/90 text-sm leading-relaxed flex-1 font-body">
          {parseText(t.text)}
        </p>

        {/* Vehicle */}
        {t.vehicle && (
          <div className="mt-4 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "rgba(37,99,235,0.7)" }} />
            <span className="text-[11px] text-white/70 font-body">Veículo: {t.vehicle}</span>
          </div>
        )}

        {/* Divider */}
        <div className="mt-5 h-px bg-white/8" />

        {/* Author */}
        <div className="mt-4 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={t.img}
              alt={t.name}
              className="w-11 h-11 rounded-full object-cover"
              style={{ border: "2px solid rgba(37,99,235,0.4)" }}
            />
            <div
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--brand-blue))" }}
            >
              <BadgeCheck className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
          <div>
            <p className="text-white font-heading font-bold text-sm">{t.name}</p>
            <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5" />
              {t.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
        >
          <TestimonialCard t={TESTIMONIALS[current]} index={0} />
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                background: i === current ? "#FACC15" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--brand-navy)) 0%, hsl(var(--brand-navy-mid)) 50%, hsl(var(--brand-navy)) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Trust Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
        >
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,99,235,0.2)" }}
              >
                <stat.icon className="w-5 h-5" style={{ color: "#FACC15" }} />
              </div>
              <div>
                <p className="text-white font-heading font-bold text-base leading-none">{stat.value}</p>
                <p className="text-white/80 text-xs mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold" style={{ color: "rgba(147,197,253,1)" }}>Depoimentos Verificados</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            HISTÓRIAS REAIS DE QUEM JÁ{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #FACC15, #FDE68A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PROTEGE SEU VEÍCULO
            </span>
          </h2>

          <p className="mt-5 text-white/85 text-lg leading-relaxed font-body">
            Milhares de clientes já confiam na nossa proteção veicular em todo o Brasil.
            Veja o que eles dizem sobre a experiência.
          </p>

          {/* Google-style rating */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white/80 text-sm">— Mais de 2.000 avaliações</span>
          </div>
        </motion.div>

        {/* ── Desktop Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* ── Mobile Carousel ── */}
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="relative inline-block w-full max-w-2xl rounded-3xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.5), rgba(250,204,21,0.3), rgba(37,99,235,0.5))",
            }}
          >
            <div
              className="rounded-3xl px-8 py-10"
              style={{ background: "rgba(0,15,55,0.95)", backdropFilter: "blur(12px)" }}
            >
              <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: "#FACC15" }} />
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Faça parte dos motoristas que já protegem{" "}
                <span style={{ color: "#FACC15" }}>seus veículos com tranquilidade.</span>
              </h3>
              <p className="mt-3 text-white/85 font-body">
                Sem burocracia. Sem análise de perfil. Ativação em até 24 horas.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => scrollTo("#cotacao")}
                  className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base text-blue-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                    boxShadow: "0 8px 32px rgba(250,204,21,0.30)",
                  }}
                >
                  <span className="relative z-10">QUERO PROTEGER MEU VEÍCULO</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }}
                  />
                </button>

                <a
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}