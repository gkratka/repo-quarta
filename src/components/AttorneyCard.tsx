import React from 'react';
import { Attorney } from '../types';

interface AttorneyCardProps {
  attorney: Attorney;
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({ attorney }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={attorney.image} 
          alt={attorney.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-6 text-white">
          <h3 className="text-xl font-serif font-semibold">{attorney.name}</h3>
          <p className="text-gray-200">{attorney.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{attorney.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Education</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {attorney.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Practice Areas</h4>
          <div className="flex flex-wrap gap-2">
            {attorney.practiceAreas.map((area, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyCard;