import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    role: "Empresário — São Paulo, SP",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/c968fbf0e_generated_5b55b6e7.png",
    text: "Quando meu carro foi roubado, a Veicula Brasil AGV resolveu tudo em menos de 30 dias. Atendimento incrível, recebí 100% da tabela FIPE. Recomendo a todos!",
  },
  {
    name: "Ana Beatriz Costa",
    role: "Advogada — Belo Horizonte, MG",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/e712c9b4c_generated_e08bd889.png",
    text: "Economizei mais de 60% comparado ao seguro do meu carro. O atendimento 24h é real, já precisei de reboque de madrugada e chegaram em 40 minutos. Excelente!",
  },
  {
    name: "Roberto Silva",
    role: "Motorista de App — Rio de Janeiro, RJ",
    img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/b86a11022_generated_2f28478a.png",
    text: "Como motorista de app, preciso do meu carro todo dia. A proteção veicular da Veicula Brasil me dá segurança de saber que estou coberto. Atendimento nota 10!",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 sm:p-10"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white/70 text-lg leading-relaxed font-body italic">"{t.text}"</p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-bold text-white">{t.name}</h4>
                    <BadgeCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-blue-500 w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}