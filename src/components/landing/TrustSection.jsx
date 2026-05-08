import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock, Truck, Shield, Car, Users, Zap, MapPin, Radio,
  ArrowRight, Phone, CheckCircle2
} from "lucide-react";

const SERVICES = [
  {
    icon: Clock,
    title: "Assistência 24 Horas",
    desc: "Suporte completo disponível a qualquer hora, todos os dias. Nossa equipe está sempre pronta para te atender.",
    color: "#3B82F6",
  },
  {
    icon: Truck,
    title: "Reboque Nacional",
    desc: "Guincho e reboque ilimitado em todo o território brasileiro, sem custo adicional.",
    color: "#60A5FA",
  },
  {
    icon: Shield,
    title: "Proteção Roubo e Furto",
    desc: "Cobertura total com 100% da tabela FIPE em caso de roubo ou furto do seu veículo.",
    color: "#FACC15",
  },
  {
    icon: Car,
    title: "Carro Reserva",
    desc: "Veículo reserva disponível enquanto o seu está em reparo. Sem deixar você na mão.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Proteção para Terceiros",
    desc: "Cobertura para danos causados a terceiros, garantindo sua segurança completa no trânsito.",
    color: "#60A5FA",
  },
  {
    icon: Zap,
    title: "Suporte Emergencial",
    desc: "Pane elétrica, mecânica, troca de pneu e chaveiro inclusos. Assistência total onde você estiver.",
    color: "#FACC15",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    desc: "Proteção válida em todo o Brasil. De Norte a Sul, você está sempre amparado.",
    color: "#3B82F6",
  },
  {
    icon: Radio,
    title: "Rastreamento Veicular",
    desc: "Sistema de rastreamento integrado para monitorar e localizar seu veículo em tempo real.",
    color: "#60A5FA",
  },
];

const TRUST_PILLS = [
  "+5.000 Veículos Protegidos",
  "Atendimento em Todo Brasil",
  "Proteção 24h",
  "Suporte Rápido e Humanizado",
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${service.color}14 0%, transparent 65%)`,
        }}
      />

      {/* Animated border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: `1px solid ${service.color}30`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${service.color}25 0%, ${service.color}10 100%)`,
          border: `1px solid ${service.color}30`,
        }}
      >
        <service.icon className="w-6 h-6" style={{ color: service.color }} />
        {/* Icon glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm"
          style={{ background: service.color }}
        />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-white text-base mb-2 leading-tight">
        {service.title}
      </h3>
      <p className="text-white/80 text-sm leading-relaxed font-body">
      {service.desc}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #001240 0%, #001F73 30%, #002EA6 65%, #001F73 85%, #001240 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", transform: "translateX(-40%)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)", transform: "translateX(40%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(250,204,21,0.04) 0%, transparent 65%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Trust Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {TRUST_PILLS.map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
              {pill}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(37,99,235,0.35)",
              color: "#93C5FD",
            }}
          >
            <Shield className="w-4 h-4" />
            Nossos Serviços
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            PROTEÇÃO COMPLETA PARA{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FACC15, #FDE68A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              O SEU VEÍCULO
            </span>
          </h2>

          <p className="mt-5 text-white/85 text-lg leading-relaxed font-body">
            Serviços desenvolvidos para oferecer mais segurança, tranquilidade e suporte
            para você e sua família em qualquer situação.
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          {/* Card */}
          <div
            className="relative max-w-2xl mx-auto rounded-3xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(250,204,21,0.3) 50%, rgba(59,130,246,0.5) 100%)",
            }}
          >
            <div
              className="rounded-3xl px-8 py-10 text-center"
              style={{ background: "rgba(0,18,64,0.97)" }}
            >
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Proteja seu veículo com quem{" "}
                <span style={{ color: "#FACC15" }}>entende do assunto.</span>
              </h3>
              <p className="mt-3 text-white/80 font-body">
                Cobertura completa, atendimento humanizado e ativação em até 24 horas.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => scrollTo("#cotacao")}
                  className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base text-blue-950 transition-all duration-300 hover:scale-[1.05]"
                  style={{
                    background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                    boxShadow: "0 8px 36px rgba(250,204,21,0.50), 0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    FAZER COTAÇÃO AGORA
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }}
                  />
                </button>

                <a
                  href="https://wa.me/5561985991662?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border border-green-400/30 hover:border-green-400/60 hover:bg-green-500/10 hover:scale-[1.03] transition-all duration-300 text-sm"
                  style={{ boxShadow: "0 4px 16px rgba(22,163,74,0.15)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] text-green-300">Atendimento Imediato</span>
                    <span>Falar no WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}