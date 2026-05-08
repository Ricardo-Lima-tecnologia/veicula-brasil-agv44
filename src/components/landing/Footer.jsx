import { Shield, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-blue-400" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-base tracking-tight">VEICULA BRASIL</span>
                <span className="text-[9px] text-blue-400 font-semibold tracking-[0.2em]">PROTEÇÃO VEICULAR</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-body">
              Proteção veicular completa com assistência 24h em todo o Brasil. Economia, segurança e tranquilidade para você e sua família.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Serviços", "Benefícios", "Veículos", "FAQ"].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => document.querySelector(`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`).scrollIntoView({ behavior: "smooth" })}
                    className="text-white/40 hover:text-blue-400 transition-colors text-sm font-body"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>WhatsApp: (00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contato@veiculabrasilagv.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/40 hover:text-blue-400 transition-colors text-sm font-body">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-blue-400 transition-colors text-sm font-body">
                  Termos de Uso
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://veiculabrasilagv.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-blue-400 transition-colors text-sm font-body flex items-center gap-1"
                >
                  veiculabrasilagv.com.br
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Veicula Brasil AGV — Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs font-body">
            Proteção Veicular em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}