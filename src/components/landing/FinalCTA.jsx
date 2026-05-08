import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const scrollTo = () => {
    const el = document.querySelector("#cotacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-brand-blue-light to-primary bg-clip-text text-transparent">
              Hoje Mesmo
            </span>
          </h2>

          <p className="mt-6 text-white/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-body">
            Faça sua cotação gratuita e fale agora com nossa equipe especializada.
            Não deixe seu patrimônio desprotegido.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-base px-8 py-6 rounded-xl shadow-lg shadow-green-600/30 gap-2"
              >
                <Phone className="w-5 h-5" />
                FALAR NO WHATSAPP
              </Button>
            </a>
            <Button
              size="lg"
              onClick={scrollTo}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/30 gap-2"
            >
              FAZER COTAÇÃO
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="mt-8 text-white/30 text-sm font-body">
            Mais de 10.000 veículos protegidos em todo o Brasil
          </p>
        </motion.div>
      </div>
    </section>
  );
}