import { motion } from "framer-motion";
import { Zap, FileCheck, Rocket, MapPin, Wallet, Heart, MessageCircle, ShieldCheck } from "lucide-react";

const BENEFITS = [
  { icon: FileCheck, title: "Sem Burocracia", desc: "Processo simples e direto, sem papelada desnecessária." },
  { icon: Zap, title: "Sem Análise Complicada", desc: "Aprovação rápida sem análise de perfil complicada." },
  { icon: Rocket, title: "Ativação Rápida", desc: "Sua proteção ativada em até 24 horas após a adesão." },
  { icon: MapPin, title: "Cobertura Nacional", desc: "Proteção válida em todo o território brasileiro." },
  { icon: Wallet, title: "Economia Real", desc: "Até 60% mais barato que o seguro tradicional." },
  { icon: Heart, title: "Atendimento Humanizado", desc: "Equipe preparada para te atender com empatia e agilidade." },
  { icon: MessageCircle, title: "Suporte Rápido", desc: "Canais de atendimento ágeis via WhatsApp e telefone." },
  { icon: ShieldCheck, title: "Proteção Completa", desc: "Cobertura ampla que abrange as principais situações." },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001240 0%, #001F73 30%, #002EA6 65%, #001F73 85%, #001240 100%)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-brand-blue-light text-sm font-semibold mb-4">
            Vantagens Exclusivas
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-brand-blue-light to-primary bg-clip-text text-transparent">
              Veicula Brasil?
            </span>
          </h2>
          <p className="mt-4 text-white/85 text-lg font-body">
            Descubra as vantagens que fazem de nós a melhor opção em proteção veicular.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-brand-blue-light/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-brand-blue-light/20 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-brand-blue-light group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-body">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}