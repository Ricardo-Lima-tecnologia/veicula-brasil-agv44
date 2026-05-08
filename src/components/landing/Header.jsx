import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Shield } from "lucide-react";

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
  const [activeLink, setActiveLink] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, hsl(var(--brand-navy)), hsl(var(--brand-blue)), #FACC15, hsl(var(--brand-blue)), hsl(var(--brand-navy)))",
        }}
      />

      {/* Main header */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "shadow-[0_4px_40px_rgba(0,0,0,0.35)]"
            : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(0,20,70,0.96)"
            : "linear-gradient(180deg, rgba(0,15,55,0.95) 0%, rgba(0,20,70,0.80) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <button
              onClick={() => scrollTo("#inicio")}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              {/* Shield icon with glow */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--brand-blue)) 0%, hsl(var(--brand-blue-light)) 100%)",
                  boxShadow: "0 0 16px hsla(var(--brand-blue-light),0.4)",
                }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-white text-base lg:text-lg tracking-tight">
                  Universo AGV
                </span>
                <span
                  className="text-[9px] font-bold tracking-[0.3em] uppercase mt-0.5"
                  style={{ color: "#FACC15" }}
                >
                  PROTEÇÃO VEICULAR
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                  style={{ color: activeLink === link.href ? "#fff" : "rgba(255,255,255,0.65)" }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    />
                  )}
                  {/* Hover underline */}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-5 transition-all duration-300 rounded-full"
                    style={{ background: "#FACC15" }}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 hover:bg-white/8 border border-white/10 hover:border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-green-400" />
                WhatsApp
              </a>

              {/* CTA */}
              <button
                onClick={() => scrollTo("#cotacao")}
                className="group relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-bold text-blue-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                  boxShadow: "0 4px 20px rgba(250,204,21,0.30)",
                }}
              >
                <span className="relative z-10">Fazer Cotação</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }}
                />
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/15 text-white transition-all hover:bg-white/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/8"
            style={{
              background: "rgba(0,15,55,0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center w-full px-4 py-3 rounded-xl text-white/75 hover:text-white hover:bg-white/6 transition-all font-medium text-sm"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                    style={{ background: "#FACC15" }}
                  />
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-3 pb-1 grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 text-white/80 text-sm font-semibold hover:bg-white/8 transition-all"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
                <button
                  onClick={() => scrollTo("#cotacao")}
                  className="py-3 rounded-xl text-sm font-bold text-blue-900"
                  style={{
                    background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                    boxShadow: "0 4px 16px rgba(250,204,21,0.25)",
                  }}
                >
                  Fazer Cotação
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}