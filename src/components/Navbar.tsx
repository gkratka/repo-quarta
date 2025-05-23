import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex flex-col items-start leading-tight">
            <span className={`text-3xl tracking-widest font-bold uppercase font-[Montserrat,sans-serif] ${isScrolled ? 'text-primary' : 'text-white'}`}
              style={{ letterSpacing: '0.12em' }}>
              HENRIQUE KRATKA
            </span>
            <span className="text-xl font-extrabold uppercase text-accent drop-shadow-md tracking-wider mt-0.5" style={{ letterSpacing: '0.15em' }}>
              ADVOGADOS
            </span>
          </a>

          <div className="hidden md:flex space-x-10">
            <NavLink href="#home" label="Home" isScrolled={isScrolled} />
            <NavLink href="#about" label="Sobre" isScrolled={isScrolled} />
            <NavLink href="#practice-areas" label="Áreas de Atuação" isScrolled={isScrolled} />
            <NavLink href="#attorneys" label="Nossa Equipe" isScrolled={isScrolled} />
            <NavLink href="#testimonials" label="Depoimentos" isScrolled={isScrolled} />
            <NavLink href="#blog" label="Insights" isScrolled={isScrolled} />
            <NavLink href="#contact" label="Contato" isScrolled={isScrolled} />
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg shadow-lg">
            <MobileNavLink href="#home" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#about" label="Sobre" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#practice-areas" label="Áreas de Atuação" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#attorneys" label="Nossa Equipe" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#testimonials" label="Depoimentos" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#blog" label="Insights" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#contact" label="Contato" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled }) => {
  return (
    <a
      href={href}
      className={`font-medium transition-colors duration-300 hover:text-accent ${isScrolled ? 'text-gray-800' : 'text-white'}`}
    >
      {label}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block font-medium text-gray-800 hover:text-accent"
    >
      {label}
    </a>
  );
};

export default Navbar;