import { Attorney } from '../types';

export const attorneys: Attorney[] = [
  {
    id: 1,
    name: 'Catherine Morgan',
    role: 'Sócia Sênior',
    bio: 'Catherine Morgan traz mais de 20 anos de experiência em direito empresarial. Ela representou com sucesso empresas da Fortune 500 em litígios complexos e negociações de fusões.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    education: [
      'J.D., Harvard Law School',
      'B.A., Yale University'
    ],
    practiceAreas: ['Direito Empresarial', 'Fusões e Aquisições', 'Regulamentação de Valores Mobiliários']
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Sócio Administrador',
    bio: 'James Wilson é especialista em direito da propriedade intelectual e ajudou inúmeras startups de tecnologia a proteger suas inovações e navegar em ambientes regulatórios complexos.',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    education: [
      'J.D., Stanford Law School',
      'B.S., MIT'
    ],
    practiceAreas: ['Propriedade Intelectual', 'Direito da Tecnologia', 'Litígios de Patentes']
  },
  {
    id: 3,
    name: 'Alexandra Chen',
    role: 'Sócia',
    bio: 'Alexandra Chen é especialista em direito de família e planejamento sucessório, ajudando clientes a navegar por questões sensíveis com compaixão e aconselhamento jurídico estratégico.',
    image: 'https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    education: [
      'J.D., Columbia Law School',
      'B.A., Princeton University'
    ],
    practiceAreas: ['Direito de Família', 'Planejamento Sucessório', 'Inventário']
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    role: 'Advogado Associado',
    bio: 'Michael Rodriguez concentra-se em litígios civis e tem um histórico sólido de obtenção de acordos favoráveis para seus clientes em casos de danos pessoais.',
    image: 'https://images.pexels.com/photos/5669622/pexels-photo-5669622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    education: [
      'J.D., University of Chicago Law School',
      'B.A., Northwestern University'
    ],
    practiceAreas: ['Litígio Civil', 'Danos Pessoais', 'Direito Trabalhista']
  }
];