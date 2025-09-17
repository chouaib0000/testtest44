import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, FileText } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
  isTyping?: boolean;
}

interface ChatbotResponse {
  text: string;
  suggestions?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useState<{name?: string, situation?: string}>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Bonjour et bienvenue chez Premium Assurances ! 👋\n\nJe suis votre conseiller virtuel spécialisé en assurances. Avec plus de 15 ans d'expertise dans le secteur, je peux vous accompagner dans tous vos projets d'assurance.\n\n🎯 **Mon expertise couvre :**\n• Assurance Auto/Moto (tous profils)\n• Assurances Professionnelles (RC, Décennale, Flotte)\n• Assurance Santé & Prévoyance\n• Assurance Habitation & Entreprise\n\nComment puis-je vous aider aujourd'hui ?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ['🚗 Assurance Auto/Moto', '💼 Assurances Pro', '❤️ Santé & Prévoyance', '📞 Parler à un expert']
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string, context: string[]): ChatbotResponse => {
    const message = userMessage.toLowerCase();
    const hasContext = (keyword: string) => context.some(ctx => ctx.includes(keyword));
    
    // Extract user name if provided
    const nameMatch = message.match(/je m'appelle ([a-zA-ZÀ-ÿ\s]+)|mon nom est ([a-zA-ZÀ-ÿ\s]+)/i);
    if (nameMatch) {
      const name = nameMatch[1] || nameMatch[2];
      setUserProfile(prev => ({ ...prev, name: name.trim() }));
    }

    const userName = userProfile.name ? `, ${userProfile.name}` : '';

    // Advanced greeting with personalization
    if (message.match(/^(bonjour|salut|hello|hi|bonsoir|hey|coucou)$/i)) {
      return {
        text: `Bonjour${userName} ! 😊\n\nRavi de vous accueillir chez Premium Assurances. Je suis votre conseiller expert dédié.\n\n**🏆 Pourquoi Premium Assurances ?**\n• **15 ans d'expertise** dans l'assurance\n• **Partenaires de confiance** sélectionnés\n• **Tarifs négociés** les plus compétitifs\n• **Accompagnement personnalisé** 7j/7\n\nQuel type de protection recherchez-vous ?`,
        suggestions: ['🚗 Auto/Moto tous profils', '🏢 Solutions Professionnelles', '❤️ Santé & Famille', '🏠 Habitation & Patrimoine']
      };
    }

    // Professional courtesy responses
    if (message.match(/(merci|thank you|thanks)/i)) {
      return {
        text: `Je vous en prie${userName} ! 😊\n\nC'est un plaisir de vous accompagner dans vos projets d'assurance. Notre mission est de vous offrir la meilleure protection au meilleur prix.\n\n**💡 Le saviez-vous ?**\nNos clients économisent en moyenne **30% sur leurs primes** grâce à notre expertise en négociation.\n\nAvez-vous d'autres questions ?`,
        suggestions: ['💰 Économiser sur mes assurances', '📋 Obtenir un devis', '📞 Parler à un expert', '❓ Autres questions']
      };
    }

    // Auto/Moto insurance - Enhanced professional responses
    if (message.match(/(auto|voiture|moto|véhicule|conducteur|permis|malus|bonus|accident)/i)) {
      if (message.includes('malus') || message.includes('malussé')) {
        return {
          text: `🚗 **Spécialiste Profils Malussés**${userName}\n\n**Notre expertise unique :**\n• **Partenaires spécialisés** acceptant tous coefficients\n• **Négociation personnalisée** selon votre historique\n• **Solutions de réintégration** progressive\n• **Accompagnement juridique** inclus\n\n**📊 Résultats concrets :**\n• 95% de nos clients malussés trouvent une solution\n• Réduction moyenne de 25% vs concurrence\n• Délai moyen : 48h pour une proposition\n\n**🎯 Prochaine étape :** Analyse gratuite de votre dossier`,
          suggestions: ['📋 Analyse gratuite dossier', '💰 Tarifs malussés', '⚖️ Accompagnement juridique', '📞 Expert malus']
        };
      }
      if (message.includes('résilié') || message.includes('résiliation')) {
        return {
          text: `🚗 **Expert Réintégration Post-Résiliation**${userName}\n\n**Notre processus professionnel :**\n• **Audit complet** de votre situation\n• **Réseau de partenaires** spécialisés résiliation\n• **Négociation directe** avec les assureurs\n• **Garanties adaptées** à votre profil\n\n**✅ Taux de réussite : 98%**\n• Réintégration sous 72h maximum\n• Couverture immédiate garantie\n• Tarifs négociés préférentiels\n\n**🔒 Engagement qualité :** Solution trouvée ou remboursé`,
          suggestions: ['🚀 Réintégration express', '📋 Audit situation', '💼 Partenaires spécialisés', '📞 Expert résiliation']
        };
      }
      if (message.includes('jeune') || message.includes('nouveau')) {
        return {
          text: `🚗 **Programme Jeunes Conducteurs Premium**${userName}\n\n**Nos avantages exclusifs :**\n• **Tarifs négociés** spécial jeunes (-20% vs marché)\n• **Bonus conduite accompagnée** reconnu\n• **Stage de conduite** offert (partenaire)\n• **App mobile** suivi conduite\n\n**🎓 Formations incluses :**\n• Conduite défensive\n• Éco-conduite\n• Gestion situations d'urgence\n\n**📱 Technologie :** Boîtier connecté pour réduire vos primes`,
          suggestions: ['📱 Boîtier connecté', '🎓 Formations incluses', '💰 Tarifs jeunes', '📞 Conseiller jeunes']
        };
      }
      return {
        text: `🚗 **Solutions Auto/Moto Premium**${userName}\n\n**Notre expertise tous profils :**\n• **Bons conducteurs** : Jusqu'à -50% avec nos bonus\n• **Profils à risques** : Partenaires spécialisés\n• **Malussés/Résiliés** : Solutions garanties\n• **Jeunes conducteurs** : Programmes dédiés\n\n**🏆 Services Premium inclus :**\n• Véhicule de remplacement Premium\n• Assistance 24h/24 Europe\n• Protection juridique renforcée\n• Garantie valeur à neuf 3 ans\n\n**⚡ Devis en 2 minutes, souscription en ligne sécurisée**`,
        suggestions: ['⚡ Devis express 2min', '🏆 Services Premium', '🌍 Assistance Europe', '📞 Expert auto']
      };
    }

    // Professional insurance - VTC/Taxi
    if (message.match(/(vtc|taxi|chauffeur|uber|transport|professionnel|course)/i)) {
      return {
        text: `🚕 **Expert Assurance Transport de Personnes**${userName}\n\n**Notre spécialisation VTC/Taxi :**\n• **Conformité réglementaire** garantie\n• **Attestations préfecture** sous 24h\n• **Couverture activité** complète\n• **Tarifs professionnels** négociés\n\n**📋 Services inclus :**\n• Gestion administrative complète\n• Déclaration sinistres 24h/24\n• Véhicule de remplacement pro\n• Formation réglementaire offerte\n\n**💼 Partenaire officiel :** Chambres de métiers, Fédérations VTC\n**⭐ Satisfaction client : 4.9/5** (2847 avis vérifiés)",
        suggestions: ['📋 Attestation 24h', '💼 Partenaire officiel', '⭐ Avis clients', '📞 Expert VTC']
      };
    }

    // RC Décennale
    if (message.match(/(décennale|decennale|btp|artisan|architecte|maître|maitre|construction|bâtiment|batiment)/i)) {
      return {
        text: `🏗️ **Spécialiste RC Décennale BTP**${userName}\n\n**Notre expertise métiers :**\n• **Tous corps d'état** couverts\n• **Tarification par activité** précise\n• **Garanties renforcées** selon métier\n• **Attestations conformes** FFB/CAPEB\n\n**🔧 Métiers couverts :**\n• Gros œuvre, Second œuvre\n• Plomberie, Électricité, Chauffage\n• Couverture, Étanchéité\n• Menuiserie, Carrelage, Peinture\n\n**⚡ Service express :** Devis en 1h, attestation sous 24h\n**🏆 Référence BTP :** 15 000+ artisans nous font confiance",
        suggestions: ['⚡ Devis express 1h', '🔧 Mon métier', '🏆 Références BTP', '📞 Expert décennale']
      };
    }

    // Fleet insurance
    if (message.match(/(flotte|parc|véhicules|utilitaire|commercial|engin|chantier|entreprise)/i)) {
      return {
        text: `🚛 **Expert Assurance Flotte Entreprise**${userName}\n\n**Notre approche professionnelle :**\n• **Audit gratuit** de votre parc existant\n• **Contrat unique** multi-véhicules\n• **Tarification dégressive** selon volume\n• **Gestion centralisée** complète\n\n**📊 Économies garanties :**\n• -30% minimum vs contrats individuels\n• Franchise unique négociée\n• Bonus/Malus collectif avantageux\n• Reporting mensuel détaillé\n\n**🎯 Engagement résultat :** Économies garanties ou nous reprenons vos anciens contrats",
        suggestions: ['📊 Audit gratuit parc', '💰 Économies garanties', '📈 Reporting détaillé', '📞 Expert flotte']
      };
    }

    // RC Pro
    if (message.match(/(rc pro|responsabilité|civile|professionnelle|dommage|activité)/i)) {
      return {
        text: `🛡️ **Expert Responsabilité Civile Professionnelle**${userName}\n\n**Protection intégrale métier :**\n• **Analyse risques** par secteur d'activité\n• **Plafonds adaptés** à votre CA\n• **Garanties spécifiques** selon profession\n• **Protection juridique** renforcée\n\n**🎯 Secteurs d'expertise :**\n• Professions libérales\n• Services aux entreprises\n• Commerce et artisanat\n• Conseil et formation\n\n**⚖️ Protection juridique Premium :** Défense pénale, recours, transaction\n**📞 Hotline juridique 24h/24** incluse",
        suggestions: ['🎯 Mon secteur', '⚖️ Protection juridique', '📞 Hotline juridique', '📞 Expert RC Pro']
      };
    }

    // Health insurance
    if (message.match(/(santé|sante|mutuelle|médical|medical|soins|hospitalisation|remboursement)/i)) {
      return {
        text: `❤️ **Conseiller Santé & Prévoyance**${userName}\n\n**Notre approche santé globale :**\n• **Bilan santé personnalisé** gratuit\n• **Comparaison 50+ mutuelles** partenaires\n• **Optimisation remboursements** garantie\n• **Accompagnement famille** complet\n\n**🏥 Services Premium inclus :**\n• Téléconsultation illimitée\n• Réseau soins partenaires\n• Médecine douce couverte\n• Assistance santé 24h/24\n\n**💰 Économies moyennes clients : 40%** vs ancienne mutuelle\n**⭐ Satisfaction : 4.8/5** (5000+ avis)",
        suggestions: ['🏥 Bilan santé gratuit', '💰 Économies 40%', '⭐ Avis clients', '📞 Conseiller santé']
      };
    }

    // Home insurance
    if (message.match(/(habitation|logement|maison|appartement|locataire|propriétaire)/i)) {
      return {
        text: `🏠 **Expert Assurance Habitation**${userName}\n\n**Protection patrimoine optimale :**\n• **Évaluation biens** par expert\n• **Garanties sur-mesure** selon logement\n• **Indemnisation valeur à neuf** garantie\n• **Assistance habitation** 24h/24\n\n**🔧 Services d'urgence inclus :**\n• Plomberie, Électricité, Serrurerie\n• Vitrerie, Chauffage\n• Relogement d'urgence\n• Garde d'enfants/animaux\n\n**🏆 Engagement Premium :** Intervention sous 2h en urgence\n**📱 App mobile** déclaration sinistre instantanée",
        suggestions: ['🔧 Services urgence', '📱 App mobile', '🏆 Intervention 2h', '📞 Expert habitation']
      };
    }

    // Business insurance
    if (message.match(/(multirisque|entreprise|commerce|local|professionnel|activité|business)/i)) {
      return {
        text: `💼 **Consultant Assurance Entreprise**${userName}\n\n**Solution globale entreprise :**\n• **Audit risques** complet gratuit\n• **Couverture 360°** activité\n• **Cyber-assurance** incluse\n• **Perte exploitation** garantie\n\n**🔒 Protection digitale Premium :**\n• Cyber-attaques, Ransomware\n• Vol données clients\n• Interruption système\n• Assistance technique 24h/24\n\n**📈 ROI moyen clients :** Économie de 35% + protection renforcée\n**🏅 Certification ISO 27001** sécurité données",
        suggestions: ['🔒 Cyber-protection', '📈 ROI clients', '🏅 Certification ISO', '📞 Consultant entreprise']
      };
    }

    // Retirement/Savings
    if (message.match(/(prévoyance|prevoyance|retraite|épargne|epargne|avenir|placement)/i)) {
      return {
        text: `📈 **Conseiller Patrimoine & Retraite**${userName}\n\n**Stratégie patrimoniale personnalisée :**\n• **Bilan retraite** complet gratuit\n• **Simulation revenus** futurs\n• **Optimisation fiscale** maximale\n• **Diversification placements** sécurisée\n\n**💎 Solutions Premium :**\n• PER avec gestion pilotée\n• Assurance-vie multi-supports\n• SCPI rendement 4-6%\n• Défiscalisation optimisée\n\n**🎯 Objectif :** Maintenir 75% de vos revenus à la retraite\n**👨‍💼 Conseiller dédié** certifié AMF",
        suggestions: ['📈 Bilan retraite gratuit', '💎 Solutions Premium', '👨‍💼 Conseiller AMF', '📞 Expert patrimoine']
      };
    }

    // Pricing questions
    if (message.match(/(prix|tarif|coût|cout|cher|économie|economie|compétitif|competitif|gratuit)/i)) {
      return {
        text: `💰 **Transparence Tarifaire Premium**${userName}\n\n**Notre engagement prix :**\n• **Tarifs négociés** exclusifs partenaires\n• **Comparaison transparente** 50+ assureurs\n• **Meilleur prix garanti** ou différence remboursée\n• **Devis gratuit** sans engagement\n\n**📊 Économies moyennes clients :**\n• Auto : -35% vs précédent assureur\n• Santé : -40% à garanties équivalentes\n• Pro : -30% avec couverture renforcée\n\n**🎁 Bonus fidélité :** -5% supplémentaires dès la 2ème année\n**⚡ Devis en 2 minutes** avec tarifs négociés",
        suggestions: ['📊 Voir économies', '🎁 Bonus fidélité', '⚡ Devis 2 minutes', '📞 Négociateur prix']
      };
    }

    // Quote requests
    if (message.match(/(devis|simulation|estimation|offre|proposition)/i)) {
      return {
        text: `📋 **Service Devis Premium**${userName}\n\n**Processus professionnel :**\n• **Questionnaire intelligent** adaptatif\n• **Analyse 50+ assureurs** simultanément\n• **Négociation personnalisée** selon profil\n• **Présentation claire** avantages/prix\n\n**⚡ Délais garantis :**\n• Devis express : 2 minutes\n• Devis détaillé : 1 heure\n• Négociation : 24h maximum\n• Souscription : Immédiate\n\n**🎯 Accompagnement complet :** De l'analyse à la souscription\n**📞 Conseiller dédié** pendant toute la durée du contrat",
        suggestions: ['⚡ Devis express 2min', '📋 Devis détaillé 1h', '🎯 Accompagnement complet', '📞 Mon conseiller']
      };
    }

    // Contact information
    if (message.match(/(contact|téléphone|telephone|email|adresse|rendez-vous|rdv|conseiller)/i)) {
      return {
        text: `📞 **Contacts Premium Assurances**${userName}\n\n**🏢 Siège Social :**\n16 RUE CUVIER, 69006 LYON\n\n**📱 Contacts directs :**\n• **Ligne conseil :** +33 9 48 46 65 87\n• **Email :** contact@premiumassurances.fr\n• **WhatsApp Business :** Disponible\n\n**🕒 Horaires Premium :**\n• Conseillers : Lun-Ven 8h-20h, Sam 9h-17h\n• Urgences sinistres : 24h/24 - 365j/an\n• Devis en ligne : 24h/24\n\n**⚡ Réponse garantie :** Sous 1h en semaine, 2h le weekend",
        suggestions: ['📱 Appeler maintenant', '💬 WhatsApp Business', '📧 Envoyer email', '📅 Prendre RDV']
      };
    }

    // Hours/Availability
    if (message.match(/(horaire|ouvert|fermé|ferme|disponible|quand|heure)/i)) {
      return {
        text: `🕒 **Disponibilité Premium Service**${userName}\n\n**👥 Équipe conseil :**\n• Lundi-Vendredi : 8h-20h\n• Samedi : 9h-17h\n• Dimanche : Urgences uniquement\n\n**🚨 Service urgences 24h/24 :**\n• Sinistres auto/habitation\n• Assistance dépannage\n• Déclarations urgentes\n• Support technique\n\n**💻 Services digitaux 24h/24 :**\n• Devis en ligne\n• Espace client\n• Déclaration sinistres\n• Chat bot intelligent\n\n**📞 Callback gratuit :** Nous vous rappelons sous 15 minutes",
        suggestions: ['📞 Callback 15min', '🚨 Urgence 24h/24', '💻 Espace client', '🤖 Chat intelligent']
      };
    }

    // Comparison questions
    if (message.match(/(comparer|comparaison|différence|difference|mieux|avantage|pourquoi)/i)) {
      return {
        text: `🎯 **Avantages Premium Assurances**${userName}\n\n**🏆 Notre différence :**\n• **15 ans d'expertise** secteur assurance\n• **50+ partenaires** sélectionnés\n• **Tarifs négociés** exclusifs\n• **Conseiller dédié** personnel\n\n**📊 Résultats clients vérifiés :**\n• 95% satisfaction (enquête indépendante)\n• 35% économies moyennes\n• 98% renouvellement contrats\n• 4.9/5 étoiles (Google Reviews)\n\n**🎁 Services Premium inclus :**\n• Bilan annuel gratuit\n• Optimisation contrats\n• Assistance juridique\n• Négociation sinistres\n\n**🔒 Garantie satisfaction :** Remboursé si pas satisfait sous 30 jours",
        suggestions: ['📊 Voir résultats clients', '🎁 Services Premium', '🔒 Garantie satisfaction', '📞 Expert comparaison']
      };
    }

    // Complaint or problem
    if (message.match(/(problème|probleme|souci|difficulté|difficulte|aide|aidez)/i)) {
      return {
        text: `🆘 **Service Résolution Premium**${userName}\n\n**Notre engagement résolution :**\n• **Écoute active** de votre situation\n• **Analyse experte** du problème\n• **Solutions personnalisées** adaptées\n• **Suivi jusqu'à résolution** complète\n\n**🎯 Spécialités résolution :**\n• Sinistres complexes\n• Résiliations subies\n• Profils difficiles\n• Litiges assureurs\n\n**⚡ Processus express :**\n1. Diagnostic gratuit (15 min)\n2. Plan d'action personnalisé\n3. Mise en œuvre immédiate\n4. Suivi jusqu'à résolution\n\n**📞 Ligne directe problèmes :** Priorité absolue",
        suggestions: ['🎯 Diagnostic gratuit', '⚡ Plan d\'action', '📞 Ligne directe', '🆘 Aide immédiate']
      };
    }

    // Specific situations
    if (message.match(/(sinistre|accident|vol|incendie|dégât|degat|urgence)/i)) {
      return {
        text: `🚨 **Centre d'Urgence Premium**${userName}\n\n**Service sinistres 24h/24 :**\n• **Déclaration immédiate** par téléphone\n• **Expert sur site** sous 2h\n• **Assistance dépannage** incluse\n• **Avance sur indemnités** possible\n\n**📱 Outils urgence :**\n• App mobile déclaration\n• Photos géolocalisées\n• Constat amiable digital\n• Suivi temps réel\n\n**🎯 Engagement résolution :**\n• Dossier ouvert : Immédiat\n• Premier contact expert : 2h\n• Proposition indemnisation : 48h\n• Règlement : 5 jours ouvrés\n\n**📞 URGENCE 24h/24 : +33 9 48 46 65 87**",
        suggestions: ['📱 App urgence', '🎯 Suivi temps réel', '📞 URGENCE 24h/24', '💰 Avance indemnités']
      };
    }

    // Default intelligent responses with more professionalism
    const responses = [
      {
        text: `Excellente question${userName} ! 🎯\n\nEn tant que votre conseiller expert, j'aimerais mieux comprendre votre situation pour vous proposer la solution la plus adaptée.\n\n**Pouvez-vous me préciser :**\n• Quel type de protection vous recherchez ?\n• Votre situation actuelle (particulier/professionnel) ?\n• Vos priorités (prix, garanties, service) ?\n\n**💡 À savoir :** Chaque situation est unique, c'est pourquoi nous personnalisons chaque conseil.`,
        suggestions: ['🚗 Protection véhicule', '🏢 Solutions pro', '❤️ Santé famille', '🏠 Protection logement']
      },
      {
        text: `Parfait${userName} ! 👍\n\nVotre demande m'intéresse beaucoup. Avec mes 15 ans d'expérience, je peux vous garantir un accompagnement personnalisé.\n\n**🎯 Pour vous conseiller au mieux :**\n• Quel est votre secteur d'activité ?\n• Avez-vous des contraintes particulières ?\n• Quel budget envisagez-vous ?\n\n**🏆 Notre promesse :** La meilleure solution au meilleur prix, avec un service Premium inclus.`,
        suggestions: ['💼 Activité professionnelle', '👨‍👩‍👧‍👦 Situation familiale', '💰 Budget et économies', '🎯 Conseil personnalisé']
      },
      {
        text: `Je suis là pour vous accompagner${userName} ! 🤝\n\n**🏅 Mon expertise Premium couvre :**\n• Auto/Moto (tous profils, même difficiles)\n• Professionnelle (RC, Décennale, Flotte)\n• Santé & Prévoyance (famille, entreprise)\n• Habitation & Patrimoine (protection complète)\n\n**💡 Conseil gratuit :** Dites-moi quel domaine vous intéresse, je vous explique tout en détail avec des exemples concrets.\n\n**⚡ Réponse immédiate garantie !**`,
        suggestions: ['🚗 Auto tous profils', '💼 Solutions pro', '❤️ Santé & famille', '📋 Devis personnalisé']
      }
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setConversationContext(prev => [...prev, inputText.toLowerCase()]);
    setInputText('');
    setIsTyping(true);

    // More realistic typing delay based on response complexity
    const typingDelay = Math.min(inputText.length * 60 + 1500, 4000);
    
    setTimeout(() => {
      const response = getBotResponse(inputText, conversationContext);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    const actions: Record<string, string> = {
      phone: "Je souhaite être rappelé par un conseiller",
      email: "J'aimerais recevoir des informations par email",
      appointment: "Je veux prendre rendez-vous avec un expert",
      quote: "Je veux obtenir un devis personnalisé"
    };
    
    setInputText(actions[action]);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <div className="relative">
            <MessageCircle size={24} className="text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[700px] bg-white rounded-2xl shadow-3xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <Bot size={24} className="mr-3" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold">Expert Premium Assurances</h3>
                  <p className="text-sm opacity-90">Conseiller certifié • En ligne</p>
                </div>
              </div>
              <div className="text-xs opacity-75">
                <div>Réponse sous 1min</div>
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <div className="flex space-x-2 text-xs">
              <button
                onClick={() => handleQuickAction('phone')}
                className="flex items-center px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors"
              >
                <Phone size={12} className="mr-1" />
                Rappel
              </button>
              <button
                onClick={() => handleQuickAction('email')}
                className="flex items-center px-2 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded-full transition-colors"
              >
                <Mail size={12} className="mr-1" />
                Email
              </button>
              <button
                onClick={() => handleQuickAction('appointment')}
                className="flex items-center px-2 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full transition-colors"
              >
                <Calendar size={12} className="mr-1" />
                RDV
              </button>
              <button
                onClick={() => handleQuickAction('quote')}
                className="flex items-center px-2 py-1 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-full transition-colors"
              >
                <FileText size={12} className="mr-1" />
                Devis
              </button>
            </div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gray-600'
                    }`}>
                      {message.isBot ? (
                        <Bot size={16} className="text-white" />
                      ) : (
                        <User size={16} className="text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-white border border-gray-200 text-gray-800 shadow-md' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                        {message.timestamp.toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Suggestions */}
                {message.isBot && message.suggestions && (
                  <div className="mt-3 flex flex-wrap gap-2 ml-10">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-blue-700 text-xs rounded-full transition-all border border-blue-200 hover:border-purple-300 transform hover:scale-105"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Enhanced Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-md">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-500 mr-2">Expert en train d'écrire</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question à l'expert..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              💬 Réponse d'expert garantie sous 1 minute
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;