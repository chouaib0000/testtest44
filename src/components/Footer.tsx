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
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
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
