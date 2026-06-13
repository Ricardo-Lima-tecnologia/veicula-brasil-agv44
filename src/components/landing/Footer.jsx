import { Shield, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: "#001240" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-brand-blue-light" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-base tracking-tight">UNIVERSO AGV</span>
                <span className="text-[9px] text-brand-blue-light font-semibold tracking-[0.2em]">PROTEÇÃO VEICULAR</span>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed font-body">
              Proteção veicular completa com assistência 24h em todo o Brasil. Tranquilidade e suporte para você e sua família.
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
                    className="text-white/70 hover:text-brand-blue-light transition-colors text-sm font-body"
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
              <li className="flex items-center gap-2 text-white/75 text-sm">
                <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <span>WhatsApp: (61) 9857-1690</span>
              </li>
              <li className="flex items-center gap-2 text-white/75 text-sm">
                <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <span>contato@universoagv.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/75 text-sm">
                <MapPin className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#politica-privacidade" className="text-white/40 hover:text-brand-blue-light transition-colors text-sm font-body">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#termos-de-uso" className="text-white/40 hover:text-brand-blue-light transition-colors text-sm font-body">
                  Termos de Uso
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://universoagv.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-brand-blue-light transition-colors text-sm font-body flex items-center gap-1"
                >
                  universoagv.com.br
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Universo AGV — Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs font-body">
            Proteção Veicular em todo o Brasil
          </p>
        </div>

        {/* Legal sections */}
        <div id="politica-privacidade" className="mt-12 pt-8 border-t border-white/5">
          <h5 className="font-heading font-bold text-white/50 text-xs uppercase tracking-wider mb-3">Política de Privacidade</h5>
          <p className="text-white/25 text-xs leading-relaxed font-body max-w-4xl">
            A Universo AGV respeita a sua privacidade. Os dados informados no formulário de cotação (nome, telefone, e-mail, cidade, modelo e ano do veículo) são utilizados exclusivamente para contato comercial e elaboração de proposta de proteção veicular. Não compartilhamos seus dados com terceiros sem sua autorização. Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Para exercer seus direitos, entre em contato pelo WhatsApp (61) 98599-1662.
          </p>
        </div>
        <div id="termos-de-uso" className="mt-6 pt-6 border-t border-white/5">
          <h5 className="font-heading font-bold text-white/50 text-xs uppercase tracking-wider mb-3">Termos de Uso</h5>
          <p className="text-white/25 text-xs leading-relaxed font-body max-w-4xl">
            Este site tem caráter informativo e comercial. A Universo AGV é uma associação de proteção veicular. Os planos ofertados são programas de proteção mútua entre associados, não constituindo seguro nos termos do art. 757 do Código Civil Brasileiro nem sendo regulados pela SUSEP. Os benefícios descritos estão sujeitos às condições do contrato de adesão e ao regulamento interno da associação, que devem ser consultados antes da contratação.
          </p>
        </div>
      </div>
    </footer>
  );
}