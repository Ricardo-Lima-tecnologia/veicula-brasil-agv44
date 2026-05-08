import { motion } from "framer-motion";

const PARTNERS = [
{
  name: "Andre Valadão",
  img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/883703719_IMG_6686.png"
},
{
  name: "Henrique Maderite",
  img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/babb3d2e6_IMG_6687.png"
},
{
  name: "Bernadinho",
  img: "https://media.base44.com/images/public/69fd4610dc407e0f852436ab/6fa8d0476_IMG_6688.png"
}];


export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #001240 0%, #001F73 30%, #002EA6 65%, #001F73 85%, #001240 100%)"
      }}>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-brand-blue-light text-sm font-semibold mb-4">
            Embaixadores
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Conheça os nossos{" "}
            <span className="from-brand-blue-light to-primary text-transparent bg-transparent">parceiros

            </span>
          </h2>
          <p className="mt-4 text-white/85 text-lg font-body">
            Grandes nomes que confiam e apoiam a Universo AGV Proteção Veicular.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PARTNERS.map((partner, i) =>
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            
              <img
              src={partner.img}
              alt={partner.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}