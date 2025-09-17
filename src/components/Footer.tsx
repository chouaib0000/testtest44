import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-4 mb-4">
              <img 
                src="/assets/logo1.png" 
                alt="Premium Assurances" 
                className="h-46 w-46 object-contain"
              />
              <span className="text-xl font-bold"></span>
            </Link>
            <p className="text-gray-300 mb-4">
              Des solutions sur mesure pour particuliers et professionnels. Bénéficiez d'une protection optimale avec les meilleures offres.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1B7FuttXX8/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/prem.iumassurances/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/premium-assurances/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/#offres" className="text-gray-300 hover:text-white transition-colors">Nos Offres</Link>
              </li>
              <li>
                <Link to="/#pourquoi" className="text-gray-300 hover:text-white transition-colors">Pourquoi Nous ?</Link>
              </li>
              <li>
                <Link to="/#comment" className="text-gray-300 hover:text-white transition-colors">Comment ça marche ?</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors">Assurance Auto & Moto</li>
              <li className="text-gray-300 hover:text-white transition-colors">Assurance Santé</li>
              <li className="text-gray-300 hover:text-white transition-colors">Assurance Habitation</li>
              <li className="text-gray-300 hover:text-white transition-colors">Responsabilité Civile Pro</li>
              <li className="text-gray-300 hover:text-white transition-colors">Multirisque Entreprise</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">16 RUE CUVIER,69006 LYON</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+33 9 48 46 65 87</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">contact@premiumassurances.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Premium Assurances. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
