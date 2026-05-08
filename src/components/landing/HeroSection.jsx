import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Shield, Clock, MapPin, Star, ChevronDown } from "lucide-react";

const FAMILY_IMG = "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/65c17eb34_generated_image.png";

const CHECKLIST = [
  "Cobertura nacional 24h",
  "Sem análise de perfil",
  "Carro reserva e reboque",
  "Aprovação em minutos",
];

const TRUST_BADGES = [
  { icon: Clock, label: "Atendimento", sub: "24 Horas" },
  { icon: MapPin, label: "Cobertura", sub: "Nacional" },
  { icon: Shield, label: "Proteção", sub: "Completa" },
  { icon: Star, label: "Assistência", sub: "Imediata" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(var(--brand-navy)) 0%, hsl(var(--brand-navy-mid)) 40%, hsl(var(--brand-blue)) 100%)",
      }}
    >
      {/* ── Decorative layers ── */}
      {/* Top-right glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(var(--brand-blue-light),0.18) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(var(--brand-blue),0.22) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Horizontal divider shine */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "50%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                +10.000 Veículos Protegidos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-white leading-[1.06] tracking-tight"
            >
              Proteção Veicular{" "}
              <br className="hidden sm:block" />
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(90deg, #FACC15, #FDE68A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Completa
              </span>{" "}
              Sem{" "}
              <br className="hidden sm:block" />
              Burocracia
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-white/90 max-w-md leading-relaxed font-body"
            >
              Proteja seu veículo contra roubo, furto e colisão com assistência 24h
              em todo o Brasil. Atendimento humanizado e aprovação imediata.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3"
            >
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm text-white font-medium font-body">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              {/* Primary */}
              <button
                onClick={() => scrollTo("#cotacao")}
                className="group relative overflow-hidden px-7 py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-blue-900 tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 50%, #FACC15 100%)",
                  boxShadow: "0 8px 32px rgba(250,204,21,0.30)",
                }}
              >
                <span className="relative z-10">FAZER MINHA COTAÇÃO AGORA</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }} />
              </button>

              {/* Secondary */}
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-7 py-4 rounded-xl font-heading font-semibold text-sm sm:text-base text-white flex items-center justify-center gap-2.5 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                FALAR NO WHATSAPP
              </a>
            </motion.div>

            {/* Stars social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-body">
                4.9 — Mais de <span className="text-white font-semibold">2.000 avaliações</span>
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, hsla(var(--brand-blue-light),0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Image frame */}
            <div className="relative w-full max-w-lg">
              {/* Animated border ring */}
              <div
                className="absolute -inset-[2px] rounded-3xl pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04), rgba(250,204,21,0.15))",
                  borderRadius: "inherit",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                <img
                  src={FAMILY_IMG}
                  alt="Família protegida pela Veicula Brasil AGV"
                  className="w-full h-[300px] sm:h-[360px] lg:h-[420px] object-cover"
                />
                {/* Inner dark overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, hsla(var(--brand-navy),0.6) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating trust badges — grid */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%+16px)] grid grid-cols-4 gap-2 px-2">
                {TRUST_BADGES.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    className="flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl border border-white/15 backdrop-blur-md text-center"
                    style={{ background: "rgba(0,30,90,0.80)" }}
                  >
                    <b.icon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <div className="leading-none">
                      <p className="text-white font-bold text-[10px] sm:text-xs">{b.label}</p>
                      <p className="text-white/85 text-[9px] sm:text-[10px] mt-0.5">{b.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 text-xs font-body cursor-pointer"
        onClick={() => scrollTo("#servicos")}
      >
        <span className="tracking-widest uppercase text-[10px]">Saiba mais</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#001240" />
        </svg>
      </div>
    </section>
  );
}