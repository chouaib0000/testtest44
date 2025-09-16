import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';

interface InsuranceDetail {
  title: string;
  description: string;
  emoji: string;
  features: string[];
  benefits: string[];
  coverage: string[];
  targetAudience: string[];
  process: string[];
}

const insuranceDetails: Record<string, InsuranceDetail> = {
  'auto-moto': {
    title: 'Assurance Auto & Moto',
    description: 'Protection complète pour tous profils de conducteurs, adaptée à chaque situation particulière.',
    emoji: '🚗',
    features: [
      'Couverture tous risques ou au tiers',
      'Protection juridique incluse',
      'Assistance 24h/24 et 7j/7',
      'Véhicule de remplacement',
      'Garantie conducteur',
      'Vol et incendie'
    ],
    benefits: [
      'Tarifs préférentiels pour bons conducteurs',
      'Solutions spéciales pour profils à risques',
      'Accompagnement personnalisé pour malussés',
      'Réintégration après résiliation',
      'Paiement mensuel sans frais',
      'Bonus fidélité'
    ],
    coverage: [
      'Responsabilité civile obligatoire',
      'Dommages tous accidents',
      'Vol, tentative de vol, vandalisme',
      'Incendie et explosion',
      'Catastrophes naturelles',
      'Bris de glace'
    ],
    targetAudience: [
      'Bons conducteurs avec bonus',
      'Conducteurs avec risques aggravés',
      'Conducteurs malussés',
      'Conducteurs résiliés',
      'Jeunes conducteurs',
      'Conducteurs seniors'
    ],
    process: [
      'Évaluation de votre profil conducteur',
      'Analyse de vos besoins spécifiques',
      'Comparaison des meilleures offres',
      'Négociation des tarifs',
      'Souscription simplifiée',
      'Suivi et accompagnement'
    ]
  },
  'rc-decennale': {
    title: 'RC Décennale',
    description: 'Assurance obligatoire pour les professionnels du bâtiment couvrant les dommages pendant 10 ans.',
    emoji: '🏗️',
    features: [
      'Couverture décennale obligatoire',
      'Garantie de parfait achèvement',
      'Protection biennale',
      'Responsabilité civile professionnelle',
      'Défense et recours',
      'Avance sur indemnités'
    ],
    benefits: [
      'Tarifs compétitifs par métier',
      'Expertise spécialisée BTP',
      'Accompagnement sinistres',
      'Attestations rapides',
      'Couverture sur mesure',
      'Service client dédié'
    ],
    coverage: [
      'Dommages compromettant la solidité',
      'Défauts rendant impropre à destination',
      'Vices cachés des équipements',
      'Malfaçons apparentes',
      'Dommages aux ouvrages existants',
      'Frais de recherche de fuites'
    ],
    targetAudience: [
      'Maîtres d\'œuvre',
      'Artisans du bâtiment',
      'Architectes',
      'Entrepreneurs généraux',
      'Constructeurs',
      'Promoteurs immobiliers'
    ],
    process: [
      'Analyse de votre activité',
      'Évaluation des risques métier',
      'Calcul de la prime adaptée',
      'Vérification des garanties',
      'Émission de l\'attestation',
      'Renouvellement automatique'
    ]
  },
  'auto-professionnelle': {
    title: 'Assurance Auto Professionnelle',
    description: 'Solutions spécialement conçues pour les chauffeurs professionnels avec un excellent rapport qualité-prix.',
    emoji: '🚕',
    features: [
      'Couverture activité VTC/Taxi',
      'Protection marchandises transportées',
      'Responsabilité civile exploitation',
      'Défense pénale et recours',
      'Assistance professionnelle',
      'Véhicule de remplacement pro'
    ],
    benefits: [
      'Tarifs négociés pour professionnels',
      'Expertise transport de personnes',
      'Gestion sinistres spécialisée',
      'Attestations conformes préfecture',
      'Accompagnement réglementaire',
      'Service 24h/24'
    ],
    coverage: [
      'Transport rémunéré de personnes',
      'Dommages au véhicule professionnel',
      'Vol d\'objets clients',
      'Agression du conducteur',
      'Perte d\'exploitation',
      'Frais de remorquage'
    ],
    targetAudience: [
      'Chauffeurs VTC',
      'Conducteurs de taxi',
      'Transporteurs légers',
      'Livreurs professionnels',
      'Ambulanciers privés',
      'Autoentrepreneurs transport'
    ],
    process: [
      'Vérification des licences',
      'Analyse du parc véhicules',
      'Calcul prime professionnelle',
      'Validation réglementaire',
      'Émission contrat conforme',
      'Suivi activité'
    ]
  },
  'flotte-vehicules': {
    title: 'Assurance Flotte de Véhicules',
    description: 'Nous nous engageons à assurer votre parc avec un seul contrat avec les prix les plus compétitifs.',
    emoji: '🚛',
    features: [
      'Contrat unique multi-véhicules',
      'Gestion centralisée',
      'Tarification dégressive',
      'Couverture tous types véhicules',
      'Assistance flotte dédiée',
      'Reporting détaillé'
    ],
    benefits: [
      'Économies d\'échelle importantes',
      'Simplification administrative',
      'Négociation groupée',
      'Suivi personnalisé',
      'Flexibilité du parc',
      'Service client dédié'
    ],
    coverage: [
      'Véhicules commerciaux',
      'Véhicules utilitaires',
      'Engins de chantier',
      'Matériel mobile',
      'Remorques et semi-remorques',
      'Équipements spécialisés'
    ],
    targetAudience: [
      'Entreprises de transport',
      'Sociétés de BTP',
      'Flottes commerciales',
      'Collectivités locales',
      'Loueurs de véhicules',
      'Groupes industriels'
    ],
    process: [
      'Audit du parc existant',
      'Analyse des besoins',
      'Négociation tarifs groupés',
      'Mise en place contrat unique',
      'Formation équipes',
      'Suivi performance'
    ]
  },
  'rc-professionnelle': {
    title: 'Responsabilité Civile Professionnelle',
    description: 'Nous vous garantissons une meilleure assurance couvrant tous les dommages liés à votre activité.',
    emoji: '🛡️',
    features: [
      'Dommages matériels',
      'Dommages immatériels',
      'Dommages corporels',
      'Faute professionnelle',
      'Défense et recours',
      'Protection juridique'
    ],
    benefits: [
      'Couverture sur mesure par métier',
      'Plafonds de garantie élevés',
      'Franchise adaptable',
      'Expertise spécialisée',
      'Gestion sinistres rapide',
      'Prévention des risques'
    ],
    coverage: [
      'Erreurs et omissions',
      'Négligence professionnelle',
      'Violation du secret professionnel',
      'Atteinte à la réputation',
      'Perte de documents',
      'Cyber-risques'
    ],
    targetAudience: [
      'Professions libérales',
      'Consultants et experts',
      'Prestataires de services',
      'Commerçants',
      'Artisans',
      'Professions réglementées'
    ],
    process: [
      'Analyse de l\'activité',
      'Évaluation des risques métier',
      'Définition des garanties',
      'Calcul de la prime',
      'Souscription du contrat',
      'Accompagnement continu'
    ]
  },
  'sante': {
    title: 'Assurance Santé',
    description: 'Couverture médicale optimale pour vous et votre famille avec des remboursements adaptés.',
    emoji: '❤️',
    features: [
      'Remboursements renforcés',
      'Tiers payant généralisé',
      'Réseau de soins partenaires',
      'Téléconsultation incluse',
      'Médecine douce couverte',
      'Assistance santé 24h/24'
    ],
    benefits: [
      'Tarifs famille avantageux',
      'Pas d\'avance de frais',
      'Remboursements rapides',
      'Prévention incluse',
      'Services santé connectés',
      'Accompagnement personnalisé'
    ],
    coverage: [
      'Consultations médicales',
      'Hospitalisation',
      'Pharmacie et médicaments',
      'Optique et audioprothèses',
      'Dentaire et orthodontie',
      'Maternité et pédiatrie'
    ],
    targetAudience: [
      'Particuliers et familles',
      'Travailleurs indépendants',
      'Seniors',
      'Étudiants',
      'Expatriés',
      'Professions libérales'
    ],
    process: [
      'Évaluation des besoins santé',
      'Comparaison des formules',
      'Simulation remboursements',
      'Souscription en ligne',
      'Activation des garanties',
      'Suivi médical'
    ]
  },
  'habitation': {
    title: 'Assurance Habitation',
    description: 'Protégez votre logement et vos biens avec des garanties personnalisées selon vos besoins.',
    emoji: '🏠',
    features: [
      'Multirisque habitation',
      'Responsabilité civile vie privée',
      'Protection juridique',
      'Assistance habitation',
      'Garantie objets de valeur',
      'Couverture dépendances'
    ],
    benefits: [
      'Indemnisation à neuf',
      'Relogement garanti',
      'Intervention d\'urgence',
      'Expertise rapide',
      'Franchise réduite',
      'Bonus fidélité'
    ],
    coverage: [
      'Incendie et explosion',
      'Dégâts des eaux',
      'Vol et vandalisme',
      'Catastrophes naturelles',
      'Bris de glace',
      'Responsabilité locative'
    ],
    targetAudience: [
      'Propriétaires occupants',
      'Locataires',
      'Propriétaires bailleurs',
      'Copropriétaires',
      'Résidents secondaires',
      'Étudiants'
    ],
    process: [
      'Évaluation du logement',
      'Inventaire des biens',
      'Choix des garanties',
      'Calcul de la prime',
      'Souscription du contrat',
      'Mise à jour régulière'
    ]
  },
  'multirisque-entreprise': {
    title: 'Multirisque Entreprise',
    description: 'Solution complète pour protéger votre entreprise, vos locaux et votre activité.',
    emoji: '💼',
    features: [
      'Dommages aux biens',
      'Perte d\'exploitation',
      'Responsabilité civile',
      'Protection juridique',
      'Cyber-assurance',
      'Bris de machine'
    ],
    benefits: [
      'Couverture globale entreprise',
      'Indemnisation rapide',
      'Expertise spécialisée',
      'Prévention des risques',
      'Accompagnement sinistres',
      'Service client dédié'
    ],
    coverage: [
      'Locaux professionnels',
      'Matériel et équipements',
      'Stocks et marchandises',
      'Pertes financières',
      'Cyber-attaques',
      'Responsabilité produits'
    ],
    targetAudience: [
      'PME et TPE',
      'Commerces',
      'Industries',
      'Prestataires de services',
      'Professions libérales',
      'Startups'
    ],
    process: [
      'Audit des risques entreprise',
      'Évaluation des biens',
      'Définition des garanties',
      'Négociation des conditions',
      'Mise en place du contrat',
      'Suivi et optimisation'
    ]
  },
  'prevoyance-retraite': {
    title: 'Prévoyance & Retraite',
    description: 'Préparez votre avenir avec nos solutions d\'épargne et de prévoyance personnalisées.',
    emoji: '📈',
    features: [
      'Épargne retraite',
      'Prévoyance décès',
      'Rente viagère',
      'Capital constitué',
      'Avantages fiscaux',
      'Gestion pilotée'
    ],
    benefits: [
      'Optimisation fiscale',
      'Rendements attractifs',
      'Flexibilité des versements',
      'Sortie en capital ou rente',
      'Transmission patrimoine',
      'Conseil personnalisé'
    ],
    coverage: [
      'Complément retraite',
      'Protection famille',
      'Invalidité permanente',
      'Incapacité temporaire',
      'Dépendance',
      'Obsèques'
    ],
    targetAudience: [
      'Salariés du privé',
      'Fonctionnaires',
      'Travailleurs indépendants',
      'Dirigeants d\'entreprise',
      'Professions libérales',
      'Retraités'
    ],
    process: [
      'Bilan retraite personnalisé',
      'Simulation des besoins',
      'Choix des supports',
      'Optimisation fiscale',
      'Mise en place épargne',
      'Suivi et ajustements'
    ]
  }
};

const InsuranceDetailPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  
  if (!type || !insuranceDetails[type]) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Page non trouvée</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const insurance = insuranceDetails[type];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour aux offres
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-white/50">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{insurance.emoji}</div>
            <h1 className="text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {insurance.title}
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {insurance.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features & Benefits */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">✨</span>
                Caractéristiques principales
              </h2>
              <ul className="space-y-3">
                {insurance.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Avantages exclusifs
              </h2>
              <ul className="space-y-3">
                {insurance.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coverage & Target */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">🛡️</span>
                Couvertures incluses
              </h2>
              <ul className="space-y-3">
                {insurance.coverage.map((cover, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cover}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="text-2xl mr-3">👥</span>
                Pour qui ?
              </h2>
              <ul className="space-y-3">
                {insurance.targetAudience.map((target, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 border border-white/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="text-2xl mr-3">🚀</span>
            Notre processus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurance.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 mt-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à vous protéger ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Obtenez votre devis personnalisé en quelques minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#quote-form"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              Obtenir un devis
            </a>
            <a 
              href="tel:+33948466587"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone size={20} className="mr-2" />
              +33 9 48 46 65 87
            </a>
            <a 
              href="mailto:contact@premiumassurances.fr"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              <Mail size={20} className="mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetailPage;
