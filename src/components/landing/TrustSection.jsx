import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Car, Truck, Key, Gift, Headphones } from "lucide-react";

const SERVICES = [
  { icon: Clock, title: "Atendimento 24 Horas", desc: "Suporte completo disponível a qualquer hora do dia ou da noite, todos os dias." },
  { icon: MapPin, title: "Cobertura Nacional", desc: "Proteção em todo o território brasileiro, onde quer que você esteja." },
  { icon: Shield, title: "Roubo e Furto", desc: "Proteção total contra roubo e furto com 100% da tabela FIPE." },
  { icon: Car, title: "Rastreamento", desc: "Sistema de rastreamento veicular para maior segurança e controle." },
  { icon: Truck, title: "Reboque", desc: "Serviço de guincho e reboque ilimitado em todo o Brasil." },
  { icon: Key, title: "Carro Reserva", desc: "Veículo reserva disponível enquanto o seu está em reparo." },
  { icon: Gift, title: "Clube de Benefícios", desc: "Descontos exclusivos em milhares de estabelecimentos parceiros." },
  { icon: Headphones, title: "Assistência Completa", desc: "Chaveiro, pane elétrica, mecânica e troca de pneu inclusos." },
];

export default function TrustSection() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Proteção que você{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">merece</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-body">
            Oferecemos cobertura completa e serviços premium para manter seu veículo protegido em qualquer situação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/5 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}