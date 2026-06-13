import { motion } from "framer-motion";
import { pixelEvents } from "@/utils/metaPixel";

const WA_LINK = "https://wa.me/5561985991662?text=Ol%C3%A1%21%20Vi%20o%20an%C3%BAncio%20da%20Universo%20AGV%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular.";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => pixelEvents.contact({ content_name: "WhatsApp Flutuante" })}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-24 right-5 z-50 lg:bottom-8 lg:right-8 flex flex-col items-end gap-2 group"
      aria-label="Fale pelo WhatsApp"
    >
      {/* Tooltip label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #16A34A, #15803D)",
          boxShadow: "0 4px 16px rgba(22,163,74,0.4)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
        Fale com um Especialista Agora
      </motion.div>

      {/* Main button */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
        <span className="absolute inset-[-6px] rounded-full bg-green-500 opacity-15 animate-pulse" />

        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
            boxShadow: "0 8px 32px rgba(22,163,74,0.55), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.548 5.872L.058 23.942l6.232-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.378l-.36-.214-3.7.875.937-3.611-.234-.372A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}