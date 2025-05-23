"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Button_1 = __importDefault(require("./components/Button"));
const PracticeAreaCard_1 = __importDefault(require("./components/PracticeAreaCard"));
const AttorneyCard_1 = __importDefault(require("./components/AttorneyCard"));
const TestimonialCard_1 = __importDefault(require("./components/TestimonialCard"));
const BlogCard_1 = __importDefault(require("./components/BlogCard"));
const ContactForm_1 = __importDefault(require("./components/ContactForm"));
const Footer_1 = __importDefault(require("./components/Footer"));
const WhatsAppButton_1 = __importDefault(require("./components/WhatsAppButton"));
const attorneys_1 = require("./data/attorneys");
const practiceAreas_1 = require("./data/practiceAreas");
const testimonials_1 = require("./data/testimonials");
const blogPosts_1 = require("./data/blogPosts");
const lucide_react_1 = require("lucide-react");
function App() {
    return (<div className="min-h-screen font-sans text-gray-800">
      <Navbar_1.default />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}assets/background-pic-1.jpeg`} alt="Assinatura de contrato" className="w-full h-full object-cover opacity-80"/>
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Excelência em <span className="text-accent">Advocacia Ambiental</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Advogados dedicados fornecendo orientação especializada e soluções eficientes para questões ambientais mais complexas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button_1.default variant="secondary" size="lg" href="#contact">
                Agende uma Consulta
              </Button_1.default>
              <Button_1.default variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Conheça Nossos Serviços
              </Button_1.default>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<lucide_react_1.Scale size={36} className="text-accent mb-4"/>} number="20+" text="Anos de Excelência"/>
            <StatCard icon={<lucide_react_1.Users size={36} className="text-accent mb-4"/>} number="+1000" text="Clientes Atendidos"/>
            <StatCard icon={<lucide_react_1.Award size={36} className="text-accent mb-4"/>} number="90%" text="Taxa de Sucesso"/>
            <StatCard icon={<lucide_react_1.Clock size={36} className="text-accent mb-4"/>} number="24/7" text="Suporte ao Cliente"/>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-gray-800 text-center">Sobre Henrique Kratka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 items-stretch">
            {/* Q1: Top Left - First half of bio */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-center">
              <p className="text-lg text-gray-700">
                Natural de Goiânia, Goiás, sou empresário e advogado com especialização em Direito e Processo Penal, além de MBA em Perícia, Auditoria e Gestão Ambiental. Minha trajetória profissional teve início em 2006, atuando como consultor ambiental, assessorando parceiros e clientes em demandas administrativas junto aos principais órgãos ambientais do país. Ao longo dos anos, construí uma sólida reputação no atendimento a produtores rurais, empreendedores e empresas, especialmente nas áreas de licenciamento ambiental, regularização fundiária e gestão de processos junto aos órgãos competentes. Essa vivência prática despertou em mim o desejo de ampliar minha atuação para a esfera jurídica, com foco no direito ambiental e no agronegócio.
              </p>
            </div>
            {/* Q2: Top Right - Lawyer photo */}
            <div className="flex items-center justify-center h-80 md:h-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <img src={`${import.meta.env.BASE_URL}assets/henrique-photo-office-2.png`} alt="Henrique Kratka" className="object-cover object-top w-full h-full max-h-80 md:max-h-full rounded-lg" style={{ aspectRatio: '1/1', minWidth: '200px', minHeight: '200px', background: '#f3f4f6' }}/>
            </div>
            {/* Q3: Bottom Left - Lawyer photo */}
            <div className="flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}assets/servico-photo.jpeg`} alt="Serviço em andamento" className="rounded-lg shadow-lg object-cover w-full h-80 md:h-full filter grayscale"/>
            </div>
            {/* Q4: Bottom Right - Second half of bio */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-center">
              <p className="text-lg text-gray-700">
                Hoje, como advogado e consultor ambiental, uno conhecimento técnico, visão estratégica e experiência de campo para oferecer soluções completas e integradas a quem busca operar de forma regular, ética e sustentável. Minha missão é contribuir ativamente na integração do uso dos recursos ambientais e o desenvolvimento da economia, de forma sustentável, buscando os interesses de nossos clientes e parceiros, sejam eles proprietários de áreas urbanas ou rurais, indústrias ou empreendedores que fazem uso dos recursos naturais. Atuo com comprometimento e responsabilidade em cada projeto, sempre buscando os melhores resultados para assegurar segurança jurídica e ambiental àqueles que confiam em nosso trabalho.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button_1.default variant="primary" size="lg">
              Saiba Mais Sobre Nós
            </Button_1.default>
          </div>
        </div>
      </section>
      
      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-800">
              Nossas Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise jurídica abrangente em diversas áreas do direito para atender suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas_1.practiceAreas.map(area => (<PracticeAreaCard_1.default key={area.id} practiceArea={area}/>))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="attorneys" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-800">
              Conheça Nossos Advogados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe de advogados experientes está dedicada a fornecer representação jurídica excepcional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys_1.attorneys.map(attorney => (<AttorneyCard_1.default key={attorney.id} attorney={attorney}/>))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">
              Depoimentos de Clientes
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              O que nossos clientes dizem sobre nossos serviços jurídicos e representação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials_1.testimonials.map(testimonial => (<TestimonialCard_1.default key={testimonial.id} testimonial={testimonial}/>))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-800">
              Insights & Notícias Jurídicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se informado com nossos últimos artigos, insights e atualizações legais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts_1.blogPosts.map(post => (<BlogCard_1.default key={post.id} post={post}/>))}
          </div>
          
          <div className="text-center mt-12">
            <Button_1.default variant="outline" size="lg">
              Ver Todos os Artigos
            </Button_1.default>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-800">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende uma consulta ou entre em contato para esclarecer suas dúvidas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="h-96 md:h-full rounded-lg overflow-hidden shadow-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.661964243527!2d-49.24739362485744!3d-16.67893468412013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1b2e2e2e2e3%3A0x1234567890abcdef!2s5%C2%AA%20Avenida%2C%20182%20-%20Leste%20Universit%C3%A1rio%2C%20Goi%C3%A2nia%20-%20GO%2C%2074605-040%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1710000000000!5m2!1sen!2sbr" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} title="Localização do Escritório"></iframe>
              </div>
            </div>
            
            <ContactForm_1.default />
          </div>
        </div>
      </section>
      
      <Footer_1.default />
      <WhatsAppButton_1.default phoneNumber="5562999940583" // Updated WhatsApp number
     message="Olá! Gostaria de agendar uma consulta sobre questões ambientais."/>
    </div>);
}
const StatCard = ({ icon, number, text }) => {
    return (<div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-primary mb-2">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>);
};
exports.default = App;
