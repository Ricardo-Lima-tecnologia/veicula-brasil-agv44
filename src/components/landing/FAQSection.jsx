import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Como funciona a proteção veicular?",
    a: "A proteção veicular funciona através de um modelo associativo. Ao se associar, você passa a contar com cobertura contra roubo, furto, colisão e assistência 24h, pagando um valor mensal muito mais acessível que o seguro tradicional.",
  },
  {
    q: "Tem assistência 24h?",
    a: "Sim! Oferecemos assistência 24 horas, 7 dias por semana, em todo o território nacional. Inclui reboque, chaveiro, pane elétrica e mecânica, troca de pneu e muito mais.",
  },
  {
    q: "A cobertura é nacional?",
    a: "Sim, a cobertura é válida em todo o Brasil. Onde quer que você esteja, poderá contar com nossos serviços de proteção e assistência.",
  },
  {
    q: "Qual a diferença para o seguro tradicional?",
    a: "A proteção veicular é oferecida por associações, com custos significativamente menores (até 60% de economia). Não há análise de perfil restritiva e o processo de adesão é muito mais simples e rápido.",
  },
  {
    q: "Como funciona a vistoria?",
    a: "A vistoria pode ser realizada de forma online ou presencial. Basta enviar fotos do seu veículo seguindo as orientações da nossa equipe. É rápido e prático!",
  },
  {
    q: "Como faço minha cotação?",
    a: "Basta preencher o formulário nesta página ou entrar em contato pelo nosso WhatsApp. Nossa equipe entrará em contato em minutos com uma cotação personalizada para o seu veículo.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001240 0%, #001F73 35%, #002EA6 65%, #001240 100%)" }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.35)", color: "#93C5FD" }}>
            Perguntas Frequentes
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Tire suas{" "}
            <span style={{ background: "linear-gradient(90deg, #FACC15, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>dúvidas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl px-6 transition-all duration-300 data-[state=open]:shadow-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                <AccordionTrigger className="text-left font-heading font-semibold text-white hover:no-underline py-5 gap-3">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#FACC15" }} />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/55 leading-relaxed font-body pb-5 pl-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}