"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (<footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="mb-2">
              <span className="text-2xl tracking-widest font-bold uppercase font-[Montserrat,sans-serif] text-white" style={{ letterSpacing: '0.12em' }}>
                HENRIQUE KRATKA
              </span>
              <br />
              <span className="text-lg font-extrabold uppercase text-accent drop-shadow-md tracking-wider mt-0.5" style={{ letterSpacing: '0.15em' }}>
                ADVOGADOS
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Um escritório de advocacia líder dedicado a fornecer serviços jurídicos excepcionais com integridade e atenção personalizada.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<lucide_react_1.Facebook size={18}/>}/>
              <SocialIcon icon={<lucide_react_1.Twitter size={18}/>}/>
              <SocialIcon icon={<lucide_react_1.Linkedin size={18}/>}/>
              <SocialIcon icon={<lucide_react_1.Instagram size={18}/>}/>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Informações de Contato</h4>
            <ul className="space-y-4">
              <ContactItem icon={<lucide_react_1.MapPin size={18}/>} text="5ª Avenida, 182 - quadra 102 lote 13, Leste Universitário, Goiânia - GO, 74605-040"/>
              <ContactItem icon={<lucide_react_1.Phone size={18}/>} text="62 999940583"/>
              <ContactItem icon={<lucide_react_1.Mail size={18}/>} text="hbconsultoriaambiental@gmail.com"/>
              <ContactItem icon={<lucide_react_1.Clock size={18}/>} text="Seg-Sex: 9h-18h"/>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              <FooterLink text="Mineral"/>
              <FooterLink text="Florestal"/>
              <FooterLink text="Outorga de Uso da Água"/>
              <FooterLink text="Piscicultura"/>
              <FooterLink text="Loteamento"/>
              <FooterLink text="Georreferenciamento"/>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <FooterLink text="Sobre Nós"/>
              <FooterLink text="Nossa Equipe"/>
              <FooterLink text="Depoimentos"/>
              <FooterLink text="Recursos Legais"/>
              <FooterLink text="Carreiras"/>
              <FooterLink text="Política de Privacidade"/>
              <FooterLink text="Termos de Serviço"/>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Henrique Kratka. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>);
};
const ContactItem = ({ icon, text }) => {
    return (<li className="flex items-start">
      <span className="text-accent mr-3 mt-1">{icon}</span>
      <span className="text-gray-400">{text}</span>
    </li>);
};
const FooterLink = ({ text }) => {
    return (<li>
      <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
        {text}
      </a>
    </li>);
};
const SocialIcon = ({ icon }) => {
    return (<a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="Social media">
      {icon}
    </a>);
};
exports.default = Footer;
