import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
      <div className="mb-6">
        <svg width="45" height="36" className="text-primary/30" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 36H0V22.5C0 16.5 1.125 11.625 3.375 7.875C5.625 4.125 9 1.5 13.5 0V6.75C10.5 7.875 8.625 9.75 7.875 12.375C7.125 15 6.75 18.375 6.75 22.5H13.5V36ZM40.5 36H27V22.5C27 16.5 28.125 11.625 30.375 7.875C32.625 4.125 36 1.5 40.5 0V6.75C37.5 7.875 35.625 9.75 34.875 12.375C34.125 15 33.75 18.375 33.75 22.5H40.5V36Z" />
        </svg>
      </div>
      
      <p className="text-gray-700 italic flex-grow mb-6">{testimonial.content}</p>
      <div className="flex flex-col items-start">
        <p className="font-serif font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;