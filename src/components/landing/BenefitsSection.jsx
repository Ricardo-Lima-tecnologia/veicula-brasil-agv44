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
    <section id="beneficios" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--brand-blue))]" style={{ color: "#93C5FD" }}>
            Conheça os nossos{" "}
            <span style={{ color: "#FACC15" }}>parceiros</span>
          </h2>
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
            
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}