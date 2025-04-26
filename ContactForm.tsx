import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Obrigado por entrar em contato. Retornaremos em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">Solicite uma Consulta</h3>
        <p className="text-gray-600">Preencha o formulário abaixo e nossa equipe entrará em contato em breve.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="João Silva"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="joao@exemplo.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="(11) 98765-4321"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Assunto Legal
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>Selecione uma área de atuação</option>
            <option value="Direito Empresarial">Direito Empresarial</option>
            <option value="Direito de Família">Direito de Família</option>
            <option value="Propriedade Intelectual">Propriedade Intelectual</option>
            <option value="Planejamento Sucessório">Planejamento Sucessório</option>
            <option value="Litígio Civil">Litígio Civil</option>
            <option value="Direito Imobiliário">Direito Imobiliário</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Sua Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Por favor, descreva brevemente sua questão legal..."
        ></textarea>
      </div>
      
      <div className="text-sm text-gray-500 mb-6">
        Ao enviar este formulário, você concorda com nossa política de privacidade e consente em ser contatado sobre sua consulta.
      </div>
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Enviar Solicitação
      </Button>
    </form>
  );
};

export default ContactForm;