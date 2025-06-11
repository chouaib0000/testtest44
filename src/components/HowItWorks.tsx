import React from 'react';
import { CheckSquare, FileText, BarChart, Shield } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Choisissez le type d'assurance",
    description: "Choisissez parmi notre large gamme d'assurances adaptées à vos besoins spécifiques.",
    icon: <CheckSquare className="h-12 w-12 text-blue-500" />
  },
  {
    number: "02",
    title: "Obtenez votre devis personnalisé",
    description: "En remplissant notre formulaire en ligne, vous recevrez un devis détaillé et sans engagement en moins de 2 minutes.",
    icon: <FileText className="h-12 w-12 text-blue-500" />
  },
  {
    number: "03",
    title: "Comparez et souscrivez",
    description: "Comparez les différentes offres proposées, obtenez des conseils de nos experts, et souscrivez en toute simplicité.",
    icon: <BarChart className="h-12 w-12 text-blue-500" />
  },
  {
    number: "04",
    title: "Profitez de votre couverture",
    description: "Une fois votre souscription validée, vous êtes couvert et protégé avec une solution fiable et adaptée à vos besoins.",
    icon: <Shield className="h-12 w-12 text-blue-500" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="comment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Comment ça fonctionne ?</h2>
          <p className="text-xl text-gray-600">Simple, rapide et efficace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;