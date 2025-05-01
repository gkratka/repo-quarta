import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import PracticeAreaCard from './components/PracticeAreaCard';
import AttorneyCard from './components/AttorneyCard';
import TestimonialCard from './components/TestimonialCard';
import BlogCard from './components/BlogCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import { attorneys } from './data/attorneys';
import { practiceAreas } from './data/practiceAreas';
import { testimonials } from './data/testimonials';
import { blogPosts } from './data/blogPosts';
import { Scale as ScaleBalance, Users, Award, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Assinatura de contrato" 
            className="w-full h-full object-cover opacity-80"
          />
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
              <Button variant="secondary" size="lg" href="#contact">
                Agende uma Consulta
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon={<ScaleBalance size={36} className="text-accent mb-4" />}
              number="25+"
              text="Anos de Excelência"
            />
            <StatCard
              icon={<Users size={36} className="text-accent mb-4" />}
              number="1500+"
              text="Clientes Atendidos"
            />
            <StatCard
              icon={<Award size={36} className="text-accent mb-4" />}
              number="98%"
              text="Taxa de Sucesso"
            />
            <StatCard
              icon={<Clock size={36} className="text-accent mb-4" />}
              number="24/7"
              text="Suporte ao Cliente"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent/10 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/5668476/pexels-photo-5668476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe do escritório" 
                className="rounded-lg shadow-lg relative z-10 w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-gray-800">
                Sobre Henrique Kratka
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundado em 2000, o escritório Kratka Advogados estabeleceu-se como referência jurídica com reputação de excelência e satisfação do cliente. Nossa equipe de advogados experientes combina profundo conhecimento jurídico com compromisso de serviço personalizado.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Acreditamos em construir relacionamentos duradouros com nossos clientes, compreendendo suas necessidades únicas e entregando soluções personalizadas que atendam seus desafios jurídicos específicos. Nossa abordagem é colaborativa, transparente e focada em alcançar os melhores resultados possíveis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Advogados Especialistas</h3>
                    <p className="text-gray-600">Profissionais altamente qualificados em diversas áreas jurídicas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Foco no Cliente</h3>
                    <p className="text-gray-600">Abordagem personalizada para cada caso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Resultados Comprovados</h3>
                    <p className="text-gray-600">Histórico de casos bem-sucedidos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prática Ética</h3>
                    <p className="text-gray-600">Comprometidos com os mais altos padrões éticos</p>
                  </div>
                </div>
              </div>
              <Button variant="primary" size="lg">
                Saiba Mais Sobre Nós
              </Button>
            </div>
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
            {practiceAreas.map(area => (
              <PracticeAreaCard key={area.id} practiceArea={area} />
            ))}
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
            {attorneys.map(attorney => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
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
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
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
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
            </Button>
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
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0998827425297!2d-46.65390492374369!3d-23.564616161669736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1709913424597!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  aria-hidden="false" 
                  tabIndex={0}
                  title="Localização do Escritório"
                ></iframe>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton 
        phoneNumber="5511999999999" // Replace with your actual WhatsApp number
        message="Olá! Gostaria de agendar uma consulta sobre questões ambientais."
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, text }) => {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-primary mb-2">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default App;