import React from 'react';
import { CheckCircle2, Users, PiggyBank, FileCheck, Clock, Eye } from 'lucide-react';

const benefits = [
  {
    title: "Un large choix d'assureurs",
    icon: <Users className="h-10 w-10 text-blue-500" />,
    description: "Nous collaborons avec plusieurs partenaires fiables pour vous offrir un éventail de solutions adaptées à vos besoins."
  },
  {
    title: "Des tarifs compétitifs",
    icon: <PiggyBank className="h-10 w-10 text-blue-500" />,
    description: "Grâce à notre comparateur, trouvez des offres à des prix compétitifs sans compromis sur la qualité de la couverture."
  },
  {
    title: "Des devis gratuits et sans engagement",
    icon: <FileCheck className="h-10 w-10 text-blue-500" />,
    description: "Obtenez un devis personnalisé sans aucune obligation, afin de comparer sereinement les options disponibles."
  },
  {
    title: "Accompagnement sur-mesure",
    icon: <CheckCircle2 className="h-10 w-10 text-blue-500" />,
    description: "Notre équipe de conseillers experts vous guide à chaque étape pour vous aider à choisir l'assurance qui vous convient le mieux."
  },
  {
    title: "Un service rapide et efficace",
    icon: <Clock className="h-10 w-10 text-blue-500" />,
    description: "En quelques minutes, vous pouvez obtenir votre devis et souscrire à une offre, sans perdre de temps."
  },
  {
    title: "Transparence et simplicité",
    icon: <Eye className="h-10 w-10 text-blue-500" />,
    description: "Avec nous, pas de surprises : toutes les informations sont claires et transparentes pour vous permettre de faire un choix éclairé."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="pourquoi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Pourquoi nous choisir ?</h2>
          <p className="text-xl text-gray-600">Ce qui nous différencie</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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