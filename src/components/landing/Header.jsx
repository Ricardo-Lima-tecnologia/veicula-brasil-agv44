import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Veículos", href: "#veiculos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-navy/90 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-brand-blue-light" />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-white text-lg tracking-tight">VEICULA BRASIL</span>
              <span className="text-[10px] text-brand-blue-light font-semibold tracking-[0.25em]">PROTEÇÃO VEICULAR</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <Button
              onClick={() => scrollTo("#cotacao")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/30"
            >
              Fazer Cotação
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button
                  onClick={() => scrollTo("#cotacao")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                >
                  Fazer Cotação
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}