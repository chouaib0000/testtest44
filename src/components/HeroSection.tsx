import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image - Much more visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/hero-background.jpg)',
        }}
      >
        {/* Lighter overlay to show more of the background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/25 to-teal-500/20"></div>
      </div>
      
      {/* Decorative elements with reduced opacity */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 blur-3xl"></div>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
              Trouvez l'assurance
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
              idéale en quelques clics !
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white font-medium leading-relaxed drop-shadow-lg">
            Des solutions <span className="text-yellow-300 font-semibold">sur mesure</span> pour particuliers et professionnels. 
            <br className="hidden md:block" />
            Bénéficiez d'une <span className="text-cyan-300 font-semibold">protection optimale</span> avec les meilleures offres.
          </p>
        <a 
  href="#quote-form" 
  className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-orange-400 via-rose-400 to-red-400 hover:from-orange-500 hover:via-rose-500 hover:to-red-500 text-white text-xl font-bold rounded-2xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20"
>
  <span className="mr-4 text-2xl">🚀</span>
  Obtenir mon devis gratuit
  <ArrowRight size={28} className="ml-4" />
</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
