import React from 'react';
import { Car, Heart, Home, Shield, Briefcase, TrendingUp } from 'lucide-react';

const insuranceTypes = [
  {
    title: "Assurance Auto & Moto",
    icon: <Car className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Protection complète pour votre véhicule avec des garanties adaptées à vos besoins et votre budget.",
    backgroundImage: "/assets/auto-insurance-bg.jpg",
    gradient: "from-red-600/40 to-orange-600/40",
    emoji: "🚗"
  },
  {
    title: "Assurance Santé",
    icon: <Heart className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Couverture médicale optimale pour vous et votre famille, avec des remboursements adaptés à vos besoins.",
    backgroundImage: "/assets/health-insurance-bg.jpg",
    gradient: "from-pink-600/40 to-rose-600/40",
    emoji: "❤️"
  },
  {
    title: "Assurance Habitation",
    icon: <Home className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Protégez votre logement et vos biens contre les sinistres avec des garanties personnalisées.",
    backgroundImage: "/assets/home-insurance-bg.jpg",
    gradient: "from-green-600/40 to-emerald-600/40",
    emoji: "🏠"
  },
  {
    title: "Responsabilité Civile Pro",
    icon: <Shield className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Couverture des risques liés à votre activité professionnelle et protection juridique.",
    backgroundImage: "/assets/professional-insurance-bg.jpg",
    gradient: "from-blue-600/40 to-cyan-600/40",
    emoji: "🛡️"
  },
  {
    title: "Multirisque Entreprise",
    icon: <Briefcase className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Solution complète pour protéger votre entreprise, vos locaux, et votre activité.",
    backgroundImage: "/assets/business-insurance-bg.jpg",
    gradient: "from-purple-600/40 to-indigo-600/40",
    emoji: "💼"
  },
  {
    title: "Prévoyance & Retraite",
    icon: <TrendingUp className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Préparez votre avenir avec nos solutions d'épargne et de prévoyance personnalisées.",
    backgroundImage: "/assets/retirement-insurance-bg.jpg",
    gradient: "from-amber-600/40 to-yellow-600/40",
    emoji: "📈"
  }
];

const InsuranceOffers: React.FC = () => {
  return (
    <section id="offres" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              Nos offres d'assurances
            </span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Nous avons conçu nos offres pour qu'elles s'adaptent à vos <span className="text-blue-600 font-semibold">besoins financiers</span> et vous offrent une 
            <span className="text-purple-600 font-semibold"> tranquillité d'esprit totale</span>. Grâce à notre expertise, vous bénéficiez de solutions 
            <span className="text-pink-600 font-semibold"> complètes et simples</span> à gérer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 flex flex-col group transform hover:scale-105 hover:rotate-1"
            >
              {/* Background Image - Much more visible */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${insurance.backgroundImage})`,
                }}
              ></div>
              
              {/* Lighter gradient overlay to show more of the background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${insurance.gradient} group-hover:opacity-90 transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 transform group-hover:scale-125 transition-transform duration-500">
                  <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-2xl">
                    <span className="text-3xl mb-2 block">{insurance.emoji}</span>
                    {insurance.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-2xl leading-tight">
                  {insurance.title}
                </h3>
                <p className="text-white/95 mb-6 flex-grow drop-shadow-lg text-lg leading-relaxed font-medium">
                  {insurance.description}
                </p>
                <div className="mt-auto">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    <span className="text-white font-semibold text-sm">En savoir plus</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#quote-form"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl border-2 border-white/20"
          >
            <span className="mr-3">✨</span>
            Obtenir mon devis personnalisé
            <span className="ml-3">🎯</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceOffers;
