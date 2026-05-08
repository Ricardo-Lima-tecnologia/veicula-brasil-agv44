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
    <section id="faq" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-sm font-semibold mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Tire suas{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">dúvidas</span>
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
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 data-[state=open]:border-blue-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-blue-600/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 gap-3">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-body pb-5 pl-8">
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