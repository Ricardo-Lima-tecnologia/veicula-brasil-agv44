import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/5561985991662?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular.";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = () => {
    const el = document.querySelector("#cotacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 pb-safe flex gap-2"
          style={{
            background: "rgba(0,12,50,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* WhatsApp button */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button
              className="w-full h-14 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
              style={{
                background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
                boxShadow: "0 4px 20px rgba(22,163,74,0.45)",
              }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.548 5.872L.058 23.942l6.232-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.378l-.36-.214-3.7.875.937-3.611-.234-.372A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-green-200 font-medium">Atendimento Imediato</span>
                <span className="text-sm font-bold">WhatsApp</span>
              </div>
            </button>
          </a>

          {/* CTA button */}
          <button
            onClick={scrollTo}
            className="flex-1 h-14 rounded-xl font-bold text-blue-900 text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
              boxShadow: "0 4px 20px rgba(250,204,21,0.45)",
            }}
          >
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-yellow-700 font-medium">Gratuito</span>
              <span className="text-sm font-bold">Fazer Cotação</span>
            </div>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}