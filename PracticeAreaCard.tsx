import React from 'react';
import { Building2, Users, Lightbulb, FileText, Scale as ScaleBalance, Home } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeAreaCardProps {
  practiceArea: PracticeArea;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ practiceArea }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 size={36} className="text-primary mb-4" />;
      case 'Users':
        return <Users size={36} className="text-primary mb-4" />;
      case 'Lightbulb':
        return <Lightbulb size={36} className="text-primary mb-4" />;
      case 'FileText':
        return <FileText size={36} className="text-primary mb-4" />;
      case 'ScaleBalance':
        return <ScaleBalance size={36} className="text-primary mb-4" />;
      case 'Home':
        return <Home size={36} className="text-primary mb-4" />;
      default:
        return <Building2 size={36} className="text-primary mb-4" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {getIcon(practiceArea.icon)}
      <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{practiceArea.title}</h3>
      <p className="text-gray-600 flex-grow">{practiceArea.description}</p>
      <a href="#contact" className="mt-4 text-primary hover:text-accent font-medium inline-flex items-center transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};

export default PracticeAreaCard;