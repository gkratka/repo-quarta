import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Kratka Advogados</h3>
            <p className="text-gray-400 mb-6">
              Um escritório de advocacia líder dedicado a fornecer serviços jurídicos excepcionais com integridade e atenção personalizada.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Informações de Contato</h4>
            <ul className="space-y-4">
              <ContactItem icon={<MapPin size={18} />} text="Av. Paulista, 1000, Conjunto 501, São Paulo, SP" />
              <ContactItem icon={<Phone size={18} />} text="(11) 3456-7890" />
              <ContactItem icon={<Mail size={18} />} text="contato@henriquekratka.adv.br" />
              <ContactItem icon={<Clock size={18} />} text="Seg-Sex: 9h-18h" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              <FooterLink text="Direito Empresarial" />
              <FooterLink text="Direito de Família" />
              <FooterLink text="Propriedade Intelectual" />
              <FooterLink text="Planejamento Sucessório" />
              <FooterLink text="Litígio Civil" />
              <FooterLink text="Direito Imobiliário" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <FooterLink text="Sobre Nós" />
              <FooterLink text="Nossa Equipe" />
              <FooterLink text="Depoimentos" />
              <FooterLink text="Recursos Legais" />
              <FooterLink text="Carreiras" />
              <FooterLink text="Política de Privacidade" />
              <FooterLink text="Termos de Serviço" />
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Henrique Kratka. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => {
  return (
    <li className="flex items-start">
      <span className="text-accent mr-3 mt-1">{icon}</span>
      <span className="text-gray-400">{text}</span>
    </li>
  );
};

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <li>
      <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
        {text}
      </a>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a 
      href="#"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
};

export default Footer;