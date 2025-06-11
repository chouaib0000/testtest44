import React from 'react';
import { Car, Heart, Home, Shield, Briefcase, TrendingUp } from 'lucide-react';

const insuranceTypes = [
  {
    title: "Assurance Auto & Moto",
    icon: <Car className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Protection complète pour votre véhicule avec des garanties adaptées à vos besoins et votre budget.",
    backgroundImage: "/assets/auto-insurance-bg.jpg"
  },
  {
    title: "Assurance Santé",
    icon: <Heart className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Couverture médicale optimale pour vous et votre famille, avec des remboursements adaptés à vos besoins.",
    backgroundImage: "/assets/health-insurance-bg.jpg"
  },
  {
    title: "Assurance Habitation",
    icon: <Home className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Protégez votre logement et vos biens contre les sinistres avec des garanties personnalisées.",
    backgroundImage: "/assets/home-insurance-bg.jpg"
  },
  {
    title: "Responsabilité Civile Pro",
    icon: <Shield className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Couverture des risques liés à votre activité professionnelle et protection juridique.",
    backgroundImage: "/assets/professional-insurance-bg.jpg"
  },
  {
    title: "Multirisque Entreprise",
    icon: <Briefcase className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Solution complète pour protéger votre entreprise, vos locaux, et votre activité.",
    backgroundImage: "/assets/business-insurance-bg.jpg"
  },
  {
    title: "Prévoyance & Retraite",
    icon: <TrendingUp className="h-12 w-12 text-white drop-shadow-lg" />,
    description: "Préparez votre avenir avec nos solutions d'épargne et de prévoyance personnalisées.",
    backgroundImage: "/assets/retirement-insurance-bg.jpg"
  }
];

const InsuranceOffers: React.FC = () => {
  return (
    <section id="offres" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nos offres d'assurances</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Nous avons conçu nos offres pour qu'elles s'adaptent à vos besoins financiers et vous offrent une tranquillité d'esprit totale. Grâce à notre expertise, vous bénéficiez de solutions complètes et simples à gérer, avec un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div 
              key={index}
              className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${insurance.backgroundImage})`,
                }}
              ></div>
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {insurance.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">{insurance.title}</h3>
                <p className="text-gray-100 mb-6 flex-grow drop-shadow-md">{insurance.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#quote-form"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Obtenir mon devis
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceOffers;