import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle2, Send } from "lucide-react";

const INITIAL = {
  nome: "", whatsapp: "", email: "", cpf: "",
  endereco: "", modelo: "", ano: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = encodeURIComponent(
      `Olá, gostaria de iniciar minha cotação de proteção veicular.\n\n` +
      `Nome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nE-mail: ${form.email}\n` +
      `CPF: ${form.cpf}\nEndereço: ${form.endereco}\n` +
      `Veículo: ${form.modelo} ${form.ano}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
    }, 1500);
  };

  const FIELDS = [
    { key: "nome", label: "Nome Completo", type: "text", placeholder: "Seu nome completo" },
    { key: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
    { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    { key: "cpf", label: "CPF", type: "text", placeholder: "000.000.000-00" },
    { key: "endereco", label: "Endereço", type: "text", placeholder: "Sua cidade e estado", full: true },
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-sm font-semibold mb-4">
              Cotação Gratuita
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Proteja seu veículo{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">agora mesmo</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed font-body">
              Preencha o formulário ao lado e receba sua cotação personalizada em minutos. Sem compromisso, sem burocracia.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Proteção contra roubo, furto e colisão",
                "Assistência 24h em todo o Brasil",
                "Economia de até 60% vs seguro tradicional",
                "Ativação em até 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-foreground font-medium font-body">{item}</span>
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
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-3xl blur-xl" />
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-600/5"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Cotação Online</h3>
                      <p className="text-sm text-muted-foreground">Resposta em minutos</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FIELDS.map((f) => (
                      <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
                        <Label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</Label>
                        <Input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={onChange(f.key)}
                          required
                          className="h-11 bg-background/50 border-border/60 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-6 rounded-xl shadow-lg shadow-blue-600/30 gap-2"
                  >
                    <Send className="w-5 h-5" />
                    INICIAR MINHA COTAÇÃO
                  </Button>

                  <p className="text-center text-xs text-muted-foreground mt-4">
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