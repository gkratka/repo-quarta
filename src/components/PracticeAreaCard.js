"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const PracticeAreaCard = ({ practiceArea }) => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Building2':
                return <lucide_react_1.Building2 size={36} className="text-primary mb-4"/>;
            case 'Users':
                return <lucide_react_1.Users size={36} className="text-primary mb-4"/>;
            case 'Lightbulb':
                return <lucide_react_1.Lightbulb size={36} className="text-primary mb-4"/>;
            case 'FileText':
                return <lucide_react_1.FileText size={36} className="text-primary mb-4"/>;
            case 'ScaleBalance':
                return <lucide_react_1.Scale size={36} className="text-primary mb-4"/>;
            case 'Home':
                return <lucide_react_1.Home size={36} className="text-primary mb-4"/>;
            case 'Gem':
                return <lucide_react_1.Gem size={36} className="text-primary mb-4"/>;
            case 'TreeDeciduous':
                return <lucide_react_1.TreeDeciduous size={36} className="text-primary mb-4"/>;
            case 'Droplets':
                return <lucide_react_1.Droplets size={36} className="text-primary mb-4"/>;
            case 'Fish':
                return <lucide_react_1.Fish size={36} className="text-primary mb-4"/>;
            case 'MapPin':
                return <lucide_react_1.MapPin size={36} className="text-primary mb-4"/>;
            default:
                return <lucide_react_1.Building2 size={36} className="text-primary mb-4"/>;
        }
    };
    return (<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {getIcon(practiceArea.icon)}
      <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{practiceArea.title}</h3>
      <p className="text-gray-600 flex-grow">{practiceArea.description}</p>
      <a href="#contact" className="mt-4 text-primary hover:text-accent font-medium inline-flex items-center transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>);
};
exports.default = PracticeAreaCard;
