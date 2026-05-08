import { motion } from "framer-motion";

const VEHICLES = [
  { label: "Carros", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/77c4793dd_generated_c8d3570b.png" },
  { label: "Motos", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/44234c6a7_generated_21a3e239.png" },
  { label: "SUVs", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/45030c093_generated_72914b6e.png" },
  { label: "Utilitários", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/0a8f69b4f_generated_f94c14a5.png" },
  { label: "Vans", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/411cd77c9_generated_f83dedb4.png" },
  { label: "Caminhões", img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/c1b5c578a_generated_c9eb516e.png" },
];

export default function VehiclesSection() {
  const scrollTo = () => {
    const el = document.querySelector("#cotacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="veiculos" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-sm font-semibold mb-4">
            Veículos Protegidos
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Proteção para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              todos os veículos
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {VEHICLES.map((v, i) => (
            <motion.button
              key={v.label}
              onClick={scrollTo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <img
                src={v.img}
                alt={v.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-heading font-bold text-white text-lg sm:text-xl">{v.label}</h3>
                <p className="text-blue-300 text-sm font-medium mt-1 group-hover:translate-x-1 transition-transform duration-300">
                  Fazer cotação →
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}