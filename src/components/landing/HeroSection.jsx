import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, BadgeCheck, Phone } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/e7efbcc9f_generated_64a4f6a5.png";

const TRUST_BADGES = [
  { icon: Clock, label: "Assistência 24h" },
  { icon: MapPin, label: "Proteção Nacional" },
  { icon: BadgeCheck, label: "100% Tabela FIPE" },
  { icon: Phone, label: "Atendimento Imediato" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Veículo premium" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40" />
      </div>

      {/* Animated glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/20 mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Proteção Veicular Premium</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            Proteção completa para o seu{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              veículo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed font-body"
          >
            Proteção contra roubo, furto e colisão com assistência 24h em todo o Brasil.
            Economia de até 60% comparado ao seguro tradicional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#cotacao")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-6 shadow-xl shadow-blue-600/30 rounded-xl animate-pulse-glow"
            >
              FAZER MINHA COTAÇÃO AGORA
            </Button>
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-xl w-full sm:w-auto gap-2"
              >
                <Phone className="w-5 h-5 text-green-400" />
                FALAR NO WHATSAPP
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <badge.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm font-medium text-white/80">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}