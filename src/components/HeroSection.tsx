import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/hero-background.jpg)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Trouvez l'assurance idéale en quelques clics !
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Des solutions sur mesure pour particuliers et professionnels. Bénéficiez d'une protection optimale avec les meilleures offres de nos différents partenaires.
          </p>
          <a 
            href="#quote-form" 
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Obtenir mon devis
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;