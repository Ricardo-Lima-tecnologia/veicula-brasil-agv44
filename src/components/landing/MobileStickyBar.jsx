import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
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
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-900/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-2"
        >
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20minha%20cota%C3%A7%C3%A3o%20de%20prote%C3%A7%C3%A3o%20veicular."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold gap-2 py-5">
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
          <Button
            onClick={scrollTo}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5"
          >
            Fazer Cotação
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}