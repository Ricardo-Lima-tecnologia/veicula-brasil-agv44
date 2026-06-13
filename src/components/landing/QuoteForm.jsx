import { useState } from "react";
import { pixelEvents } from "@/utils/metaPixel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle2, Send } from "lucide-react";

const INITIAL = {
  nome: "", whatsapp: "", email: "",
  endereco: "", modelo: "", ano: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    pixelEvents.lead({
      content_name: "Cotação Proteção Veicular — Formulário",
    });

    const msg = encodeURIComponent(
      `Olá! Vi o anúncio da Universo AGV e gostaria de solicitar uma cotação de proteção veicular.\n\n` +
      `Nome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nE-mail: ${form.email}\n` +
      `Endereço: ${form.endereco}\n` +
      `Veículo: ${form.modelo} ${form.ano}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/556198571690?text=${msg}`, "_blank");
    }, 1500);
  };

  const FIELDS = [
    { key: "nome", label: "Nome Completo", type: "text", placeholder: "Seu nome completo" },
    { key: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
    { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    { key: "endereco", label: "Cidade e Estado", type: "text", placeholder: "Ex: Brasília - DF", full: true },
    { key: "modelo", label: "Modelo do Veículo", type: "text", placeholder: "Ex: Honda Civic 2023" },
    { key: "ano", label: "Ano do Veículo", type: "text", placeholder: "Ex: 2023" },
  ];

  return (
    <section id="cotacao" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001240 0%, #001F73 30%, #002EA6 65%, #001F73 85%, #001240 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.35)", color: "#93C5FD" }}>
              Cotação Gratuita
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Proteja seu veículo{" "}
              <span style={{ background: "linear-gradient(90deg, #FACC15, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>agora mesmo</span>
            </h2>
            <p className="mt-5 text-white/55 text-lg leading-relaxed font-body">
              Preencha o formulário ao lado e receba sua cotação personalizada em minutos. Sem compromisso, sem burocracia.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Proteção contra roubo, furto e colisão",
                "Assistência 24h em todo o Brasil",
                "Custo mais acessível que o seguro tradicional",
                "Ativação em até 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/80 font-medium font-body">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {!submitted ? (
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-[3px] rounded-3xl pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.5), rgba(37,99,235,0.4), rgba(250,204,21,0.5))", filter: "blur(2px)" }} />
                <div className="absolute -inset-8 rounded-[40px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(250,204,21,0.12) 0%, rgba(37,99,235,0.10) 40%, transparent 70%)" }} />

                <form
                  onSubmit={handleSubmit}
                  className="relative rounded-2xl p-6 sm:p-8"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(250,204,21,0.35)",
                    boxShadow: "0 0 60px rgba(250,204,21,0.15), 0 20px 60px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)", boxShadow: "0 4px 16px rgba(250,204,21,0.35)" }}>
                      <Shield className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-blue-900 text-lg">Cotação Online</h3>
                      <p className="text-sm font-medium" style={{ color: "#FACC15" }}>Resposta em minutos ⚡</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FIELDS.map((f) => (
                      <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
                        <Label className="text-sm font-semibold text-blue-900 mb-1.5 block">{f.label}</Label>
                        <Input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={onChange(f.key)}
                          required
                          className="h-12 rounded-xl text-blue-900 placeholder:text-gray-400 font-medium"
                          style={{
                            background: "#F8FAFF",
                            border: "1px solid rgba(37,99,235,0.2)",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full mt-6 py-5 rounded-xl font-heading font-bold text-base text-blue-900 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                      boxShadow: "0 8px 40px rgba(250,204,21,0.55), 0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      INICIAR MINHA COTAÇÃO
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #FDE68A 0%, #FACC15 100%)" }} />
                  </button>

                  <p className="text-center text-xs mt-4 flex items-center justify-center gap-1.5 text-gray-400">
                    <Shield className="w-3.5 h-3.5" style={{ color: "#FACC15" }} />
                    Seus dados estão protegidos e não serão compartilhados.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-10 text-center shadow-2xl"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground">Cotação Enviada!</h3>
                <p className="mt-3 text-muted-foreground font-body">
                  Você está sendo redirecionado para o WhatsApp para conversar com nossa equipe.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}