import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Phone, ArrowRight } from "lucide-react";
import { pixelEvents } from "@/utils/metaPixel";

export default function FinalCTA() {
  const scrollTo = () => {
    const el = document.querySelector("#cotacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001240 0%, #001F73 30%, #002EA6 65%, #001F73 85%, #001240 100%)" }}>
      {/* Animated blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-8">
            <Shield className="w-8 h-8 text-brand-blue-light" />
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
            Proteja Seu Veículo{" "}
            <span style={{ background: "linear-gradient(90deg, #FACC15, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hoje Mesmo
            </span>
          </h2>

          <p className="mt-6 text-white/85 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-body">
            Faça sua cotação gratuita e fale agora com nossa equipe especializada.
            Não deixe seu patrimônio desprotegido.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/556198571690?text=Ol%C3%A1%21%20Vi%20o%20an%C3%BAncio%20da%20Universo%20AGV%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pixelEvents.contact({ content_name: "WhatsApp Final CTA" })}
            >
              <button
                className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-[1.05]"
                style={{
                  background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
                  boxShadow: "0 8px 32px rgba(22,163,74,0.50), 0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-200 animate-pulse flex-shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-green-200 font-medium">Suporte Rápido no WhatsApp</span>
                  <span>FALAR NO WHATSAPP</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)" }} />
              </button>
            </a>
            <button
              onClick={scrollTo}
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-blue-900 transition-all duration-300 hover:scale-[1.05]"
              style={{
                background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                boxShadow: "0 8px 32px rgba(250,204,21,0.50), 0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                FAZER COTAÇÃO AGORA
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }} />
            </button>
          </div>

          <p className="mt-8 text-white/60 text-sm font-body">
            Mais de 10.000 veículos protegidos em todo o Brasil
          </p>
        </motion.div>
      </div>
    </section>
  );
}