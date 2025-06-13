import React from 'react';
import { CheckSquare, FileText, BarChart, Shield } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Choisissez le type d'assurance",
    description: "Choisissez parmi notre large gamme d'assurances adaptées à vos besoins spécifiques.",
    icon: <CheckSquare className="h-12 w-12 text-white" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    emoji: "🎯"
  },
  {
    number: "02",
    title: "Obtenez votre devis personnalisé",
    description: "En remplissant notre formulaire en ligne, vous recevrez un devis détaillé et sans engagement en moins de 2 minutes.",
    icon: <FileText className="h-12 w-12 text-white" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    emoji: "📝"
  },
  {
    number: "03",
    title: "Comparez et souscrivez",
    description: "Comparez les différentes offres proposées, obtenez des conseils de nos experts, et souscrivez en toute simplicité.",
    icon: <BarChart className="h-12 w-12 text-white" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    emoji: "📊"
  },
  {
    number: "04",
    title: "Profitez de votre couverture",
    description: "Une fois votre souscription validée, vous êtes couvert et protégé avec une solution fiable et adaptée à vos besoins.",
    icon: <Shield className="h-12 w-12 text-white" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    emoji: "🛡️"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="comment" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              Comment ça fonctionne ?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            <span className="text-blue-600 font-bold">Simple</span>, 
            <span className="text-purple-600 font-bold"> rapide</span> et 
            <span className="text-pink-600 font-bold"> efficace</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center relative bg-gradient-to-br ${step.bgGradient} rounded-2xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 border-2 border-white/50`}
            >
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${step.gradient} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-2xl text-lg border-4 border-white`}>
                {index + 1}
              </div>
              <div className="mb-8 flex justify-center">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${step.gradient} w-fit mx-auto shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl block mb-2">{step.emoji}</span>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
