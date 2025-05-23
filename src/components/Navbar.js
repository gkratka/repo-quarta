"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isScrolled, setIsScrolled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex flex-col items-start leading-tight">
            <span className={`text-3xl tracking-widest font-bold uppercase font-[Montserrat,sans-serif] ${isScrolled ? 'text-primary' : 'text-white'}`} style={{ letterSpacing: '0.12em' }}>
              HENRIQUE KRATKA
            </span>
            <span className="text-xl font-extrabold uppercase text-accent drop-shadow-md tracking-wider mt-0.5" style={{ letterSpacing: '0.15em' }}>
              ADVOGADOS
            </span>
          </a>

          <div className="hidden md:flex space-x-10">
            <NavLink href="#home" label="Home" isScrolled={isScrolled}/>
            <NavLink href="#about" label="Sobre" isScrolled={isScrolled}/>
            <NavLink href="#practice-areas" label="Áreas de Atuação" isScrolled={isScrolled}/>
            <NavLink href="#attorneys" label="Nossa Equipe" isScrolled={isScrolled}/>
            <NavLink href="#testimonials" label="Depoimentos" isScrolled={isScrolled}/>
            <NavLink href="#blog" label="Insights" isScrolled={isScrolled}/>
            <NavLink href="#contact" label="Contato" isScrolled={isScrolled}/>
          </div>

          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`} aria-label="Toggle menu">
              {isOpen ? <lucide_react_1.X size={24}/> : <lucide_react_1.Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg shadow-lg">
            <MobileNavLink href="#home" label="Home" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#about" label="Sobre" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#practice-areas" label="Áreas de Atuação" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#attorneys" label="Nossa Equipe" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#testimonials" label="Depoimentos" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#blog" label="Insights" onClick={() => setIsOpen(false)}/>
            <MobileNavLink href="#contact" label="Contato" onClick={() => setIsOpen(false)}/>
          </div>
        </div>
      </div>
    </nav>);
};
const NavLink = ({ href, label, isScrolled }) => {
    return (<a href={href} className={`font-medium transition-colors duration-300 hover:text-accent ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
      {label}
    </a>);
};
const MobileNavLink = ({ href, label, onClick }) => {
    return (<a href={href} onClick={onClick} className="block font-medium text-gray-800 hover:text-accent">
      {label}
    </a>);
};
exports.default = Navbar;
