import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, Home, Shield, Briefcase, TrendingUp, Truck, HardHat, Users } from 'lucide-react';

const insuranceTypes = [
  {
    type: 'auto-moto',
    title: "Assurance Auto & Moto",
    icon: <Car className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Protection complète pour tous profils : bons conducteurs, risques aggravés, malussés, résiliés. Solutions adaptées à chaque situation.",
    backgroundImage: "/assets/auto-insurance-bg.jpg",
    gradient: "from-red-600/40 to-orange-600/40",
    emoji: "🚗",
    details: [
      "Bons conducteurs",
      "Risques aggravés", 
      "Malussés",
      "Résiliés"
    ]
  },
  {
    type: 'rc-decennale',
    title: "RC Décennale",
    icon: <HardHat className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Couverture des dommages et risques liés à votre activité professionnelle. Pour maîtres d'œuvre, artisans et architectes.",
    backgroundImage: "/assets/professional-insurance-bg.jpg",
    gradient: "from-amber-600/40 to-yellow-600/40",
    emoji: "🏗️",
    details: [
      "Maîtres d'œuvre",
      "Artisans",
      "Architectes",
      "Couverture décennale"
    ]
  },
  {
    type: 'auto-professionnelle',
    title: "Assurance Auto Professionnelle",
    icon: <Truck className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Solutions spécialement conçues pour les chauffeurs professionnels VTC, taxis, transporteurs. Couverture complète avec un excellent rapport qualité-prix.",
    backgroundImage: "/assets/business-insurance-bg.jpg",
    gradient: "from-blue-600/40 to-cyan-600/40",
    emoji: "🚕",
    details: [
      "VTC & Taxis",
      "Transporteurs",
      "Chauffeurs professionnels",
      "Rapport qualité-prix optimal"
    ]
  },
  {
    type: 'flotte-vehicules',
    title: "Assurance Flotte de Véhicules",
    icon: <Users className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Nous nous engageons à assurer votre parc de véhicules (commerciaux, utilitaires, engins de chantier) avec un seul contrat aux prix les plus compétitifs.",
    backgroundImage: "/assets/auto-insurance-bg.jpg",
    gradient: "from-green-600/40 to-emerald-600/40",
    emoji: "🚛",
    details: [
      "Véhicules commerciaux",
      "Véhicules utilitaires", 
      "Engins de chantier",
      "Contrat unique"
    ]
  },
  {
    type: 'rc-professionnelle',
    title: "Responsabilité Civile Pro",
    icon: <Shield className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Nous vous garantissons une meilleure assurance qui couvre les dommages matériels, immatériels et corporels causés dans le cadre de votre activité.",
    backgroundImage: "/assets/professional-insurance-bg.jpg",
    gradient: "from-purple-600/40 to-indigo-600/40",
    emoji: "🛡️",
    details: [
      "Dommages matériels",
      "Dommages immatériels",
      "Dommages corporels",
      "Couverture activité professionnelle"
    ]
  },
  {
    type: 'sante',
    title: "Assurance Santé",
    icon: <Heart className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Couverture médicale optimale pour vous et votre famille, avec des remboursements adaptés à vos besoins et votre budget.",
    backgroundImage: "/assets/health-insurance-bg.jpg",
    gradient: "from-pink-600/40 to-rose-600/40",
    emoji: "❤️",
    details: [
      "Couverture familiale",
      "Remboursements adaptés",
      "Soins médicaux",
      "Hospitalisation"
    ]
  },
  {
    type: 'habitation',
    title: "Assurance Habitation",
    icon: <Home className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Protégez votre logement et vos biens contre les sinistres avec des garanties personnalisées selon vos besoins.",
    backgroundImage: "/assets/home-insurance-bg.jpg",
    gradient: "from-teal-600/40 to-green-600/40",
    emoji: "🏠",
    details: [
      "Protection logement",
      "Biens personnels",
      "Garanties personnalisées",
      "Sinistres couverts"
    ]
  },
  {
    type: 'multirisque-entreprise',
    title: "Multirisque Entreprise",
    icon: <Briefcase className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Solution complète pour protéger votre entreprise, vos locaux, et votre activité avec une couverture adaptée à votre secteur.",
    backgroundImage: "/assets/business-insurance-bg.jpg",
    gradient: "from-indigo-600/40 to-purple-600/40",
    emoji: "💼",
    details: [
      "Protection entreprise",
      "Locaux professionnels",
      "Activité commerciale",
      "Couverture secteur"
    ]
  },
  {
    type: 'prevoyance-retraite',
    title: "Prévoyance & Retraite",
    icon: <TrendingUp className="h-14 w-14 text-white drop-shadow-lg" />,
    description: "Préparez votre avenir avec nos solutions d'épargne et de prévoyance personnalisées pour une retraite sereine.",
    backgroundImage: "/assets/retirement-insurance-bg.jpg",
    gradient: "from-orange-600/40 to-red-600/40",
    emoji: "📈",
    details: [
      "Solutions d'épargne",
      "Prévoyance personnalisée",
      "Préparation retraite",
      "Avenir sécurisé"
    ]
  }
];

const InsuranceOffers: React.FC = () => {
  return (
    <section id="offres" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              Nos offres d'assurances spécialisées
            </span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Nous avons conçu nos offres pour qu'elles s'adaptent à vos <span className="text-blue-600 font-semibold">besoins spécifiques</span> et vous offrent une 
            <span className="text-purple-600 font-semibold"> tranquillité d'esprit totale</span>. Grâce à notre expertise, vous bénéficiez de solutions 
            <span className="text-pink-600 font-semibold"> complètes et professionnelles</span> adaptées à votre profil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 flex flex-col group transform hover:scale-105 hover:rotate-1"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${insurance.backgroundImage})`,
                }}
              ></div>
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${insurance.gradient} group-hover:opacity-90 transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="mb-6 transform group-hover:scale-125 transition-transform duration-500 text-center">
                  <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-2xl inline-block">
                    <span className="text-3xl mb-2 block">{insurance.emoji}</span>
                    {insurance.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-2xl leading-tight text-center">
                  {insurance.title}
                </h3>
                
                <p className="text-white/95 mb-6 drop-shadow-lg text-lg leading-relaxed font-medium text-center">
                  {insurance.description}
                </p>
                
                {/* Details list */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {insurance.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-white/90 text-sm">
                        <span className="w-2 h-2 bg-white/80 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto text-center">
                  <Link 
                    to={`/assurance/${insurance.type}`}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 inline-block hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white font-semibold text-sm">En savoir plus</span>
                  </Link>
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

        {/* Social Media Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Suivez-nous sur les réseaux sociaux</p>
          <a 
            href="https://www.facebook.com/share/1B7FuttXX8/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Visitez notre page Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceOffers;