import React from 'react';
import { CheckCircle2, Users, PiggyBank, FileCheck, Clock, Eye } from 'lucide-react';

const benefits = [
  {
    title: "Un large choix d'assureurs",
    icon: <Users className="h-12 w-12 text-white" />,
    description: "Nous collaborons avec plusieurs partenaires fiables pour vous offrir un éventail de solutions adaptées à vos besoins.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    emoji: "🤝"
  },
  {
    title: "Des tarifs compétitifs",
    icon: <PiggyBank className="h-12 w-12 text-white" />,
    description: "Grâce à notre comparateur, trouvez des offres à des prix compétitifs sans compromis sur la qualité de la couverture.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    emoji: "💰"
  },
  {
    title: "Des devis gratuits et sans engagement",
    icon: <FileCheck className="h-12 w-12 text-white" />,
    description: "Obtenez un devis personnalisé sans aucune obligation, afin de comparer sereinement les options disponibles.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    emoji: "📋"
  },
  {
    title: "Accompagnement sur-mesure",
    icon: <CheckCircle2 className="h-12 w-12 text-white" />,
    description: "Notre équipe de conseillers experts vous guide à chaque étape pour vous aider à choisir l'assurance qui vous convient le mieux.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    emoji: "👥"
  },
  {
    title: "Un service rapide et efficace",
    icon: <Clock className="h-12 w-12 text-white" />,
    description: "En quelques minutes, vous pouvez obtenir votre devis et souscrire à une offre, sans perdre de temps.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    emoji: "⚡"
  },
  {
    title: "Transparence et simplicité",
    icon: <Eye className="h-12 w-12 text-white" />,
    description: "Avec nous, pas de surprises : toutes les informations sont claires et transparentes pour vous permettre de faire un choix éclairé.",
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
    emoji: "👁️"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="pourquoi" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
              Pourquoi nous choisir ?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Ce qui nous <span className="text-purple-600 font-bold">différencie</span> vraiment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${benefit.bgGradient} p-8 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border-2 border-white/50`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 mt-1 p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl block mb-1">{benefit.emoji}</span>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
