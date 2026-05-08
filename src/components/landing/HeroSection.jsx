import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Shield } from "lucide-react";

const FAMILY_IMG = "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/65c17eb34_generated_image.png";

const CHECKLIST = [
  "Cobertura nacional 24h",
  "Sem análise de perfil",
  "Carro reserva e reboque",
  "Aprovação em minutos",
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a3fbf 0%, #1e50d8 30%, #2563eb 60%, #1d4ed8 100%)",
      }}
    >
      {/* Subtle overlay patterns */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #60a5fa 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Proteção{" "}
              <br />
              Veicular{" "}
              <br />
              <span className="text-yellow-300">Completa</span> Para{" "}
              <br />
              Seu Carro Sem{" "}
              <br />
              Burocracia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-white/75 max-w-md leading-relaxed font-body"
            >
              Proteja seu veículo contra roubo, furto, colisão e tenha assistência 24h
              em todo o Brasil. Atendimento rápido, humanizado e aprovação imediata.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/85 font-medium font-body">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#cotacao")}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-yellow-400/20"
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
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold text-base px-8 py-6 rounded-xl w-full sm:w-auto gap-2"
                >
                  <Phone className="w-5 h-5 text-green-300" />
                  FALAR NO WHATSAPP
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main image */}
            <div className="relative w-full max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={FAMILY_IMG}
                  alt="Família protegida pela Veicula Brasil AGV"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                />
                {/* Subtle inner shadow on edges */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Floating trust badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                className="absolute -bottom-5 -right-4 sm:bottom-4 sm:right-4"
              >
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-black/20">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="leading-none">
                    <p className="font-heading font-extrabold text-blue-700 text-base">+10.000</p>
                    <p className="text-gray-500 text-xs mt-0.5 font-body">Veículos Protegidos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}