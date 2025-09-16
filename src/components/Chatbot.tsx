import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
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
        text: "Bonjour ! 👋 Je suis votre assistant virtuel Premium Assurances. Je peux vous aider avec toutes vos questions d'assurance. Que souhaitez-vous savoir ?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ['Types d\'assurance', 'Obtenir un devis', 'Tarifs et prix', 'Nous contacter']
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string, context: string[]): ChatbotResponse => {
    const message = userMessage.toLowerCase();
    const hasContext = (keyword: string) => context.some(ctx => ctx.includes(keyword));
    
    // Advanced greeting detection
    if (message.match(/^(bonjour|salut|hello|hi|bonsoir|hey|coucou)$/i)) {
      return {
        text: "Bonjour ! 😊 Ravi de vous parler ! Je suis spécialisé dans les assurances et je connais parfaitement nos offres. Comment puis-je vous accompagner aujourd'hui ?",
        suggestions: ['Voir nos assurances', 'Comparer les prix', 'Obtenir un devis', 'Parler à un conseiller']
      };
    }

    // Politeness responses
    if (message.match(/(merci|thank you|thanks)/i)) {
      return {
        text: "Je vous en prie ! 😊 C'est un plaisir de vous aider. Avez-vous d'autres questions sur nos assurances ?",
        suggestions: ['Autres questions', 'Obtenir un devis', 'Nous contacter']
      };
    }

    // Auto/Moto insurance - Enhanced responses
    if (message.match(/(auto|voiture|moto|véhicule|conducteur|permis|malus|bonus|accident)/i)) {
      if (message.includes('malus') || message.includes('malussé')) {
        return {
          text: "🚗 Pas de souci ! Nous sommes spécialistes des profils malussés. Nous avons des solutions adaptées même avec un coefficient de malus élevé. Nos partenaires acceptent les conducteurs avec historique difficile et nous négocions les meilleurs tarifs pour vous.",
          suggestions: ['Devis malussé', 'Nos garanties', 'Réduction malus', 'Parler à un expert']
        };
      }
      if (message.includes('résilié') || message.includes('résiliation')) {
        return {
          text: "🚗 Nous sommes experts en réintégration ! Même après une résiliation, nous trouvons des solutions. Nos partenaires spécialisés acceptent les profils résiliés et nous vous accompagnons pour retrouver une couverture adaptée rapidement.",
          suggestions: ['Devis après résiliation', 'Conditions spéciales', 'Réintégration rapide', 'Nous contacter']
        };
      }
      if (message.includes('jeune') || message.includes('nouveau')) {
        return {
          text: "🚗 Jeune conducteur ? Nous avons des offres spéciales ! Malgré le surcoût habituel, nous négocions des tarifs préférentiels et proposons des formules adaptées aux nouveaux conducteurs avec des garanties complètes.",
          suggestions: ['Tarifs jeunes', 'Conduite accompagnée', 'Garanties adaptées', 'Devis personnalisé']
        };
      }
      return {
        text: "🚗 Notre assurance auto/moto couvre TOUS les profils ! Que vous soyez bon conducteur, malussé, résilié ou avec risques aggravés, nous avons LA solution. Nos experts négocient les meilleurs tarifs selon votre situation.",
        suggestions: ['Devis auto/moto', 'Profils spéciaux', 'Garanties complètes', 'Tarifs préférentiels']
      };
    }

    // Professional insurance - VTC/Taxi
    if (message.match(/(vtc|taxi|chauffeur|uber|transport|professionnel|course)/i)) {
      return {
        text: "🚕 Parfait ! Nous sommes THE spécialistes VTC/Taxi ! Notre assurance auto professionnelle couvre intégralement votre activité de transport de personnes. Excellent rapport qualité-prix, attestations conformes préfecture, et gestion sinistres spécialisée 24h/24.",
        suggestions: ['Devis VTC/Taxi', 'Attestations préfecture', 'Garanties pro', 'Tarifs chauffeurs']
      };
    }

    // RC Décennale
    if (message.match(/(décennale|decennale|btp|artisan|architecte|maître|maitre|construction|bâtiment|batiment)/i)) {
      return {
        text: "🏗️ RC Décennale obligatoire ! Nous couvrons tous les professionnels du bâtiment : maîtres d'œuvre, artisans, architectes. Protection complète pendant 10 ans contre tous dommages compromettant la solidité ou rendant impropre à destination.",
        suggestions: ['Devis décennale', 'Métiers couverts', 'Garanties 10 ans', 'Attestation rapide']
      };
    }

    // Fleet insurance
    if (message.match(/(flotte|parc|véhicules|utilitaire|commercial|engin|chantier|entreprise)/i)) {
      return {
        text: "🚛 Assurance flotte = notre spécialité ! Un seul contrat pour tout votre parc (véhicules commerciaux, utilitaires, engins de chantier). Nous nous engageons sur les prix les plus compétitifs du marché avec gestion centralisée.",
        suggestions: ['Devis flotte', 'Contrat unique', 'Prix compétitifs', 'Gestion centralisée']
      };
    }

    // RC Pro
    if (message.match(/(rc pro|responsabilité|civile|professionnelle|dommage|activité)/i)) {
      return {
        text: "🛡️ RC Pro = protection totale ! Nous garantissons la meilleure couverture pour tous dommages (matériels, immatériels, corporels) causés dans votre activité professionnelle. Protection juridique incluse et expertise spécialisée par métier.",
        suggestions: ['Devis RC Pro', 'Couverture complète', 'Protection juridique', 'Expertise métier']
      };
    }

    // Health insurance
    if (message.match(/(santé|sante|mutuelle|médical|medical|soins|hospitalisation|remboursement)/i)) {
      return {
        text: "❤️ Santé = priorité absolue ! Notre assurance santé offre une couverture optimale pour vous et votre famille. Remboursements renforcés, tiers payant, réseau de soins partenaires et téléconsultation incluse.",
        suggestions: ['Devis santé', 'Couverture famille', 'Tiers payant', 'Remboursements']
      };
    }

    // Home insurance
    if (message.match(/(habitation|logement|maison|appartement|locataire|propriétaire)/i)) {
      return {
        text: "🏠 Votre logement mérite la meilleure protection ! Multirisque habitation avec garanties personnalisées : incendie, dégâts des eaux, vol, catastrophes naturelles. Indemnisation à neuf et relogement garanti.",
        suggestions: ['Devis habitation', 'Garanties personnalisées', 'Indemnisation neuf', 'Protection complète']
      };
    }

    // Business insurance
    if (message.match(/(multirisque|entreprise|commerce|local|professionnel|activité|business)/i)) {
      return {
        text: "💼 Multirisque Entreprise = solution globale ! Protection complète de votre entreprise, locaux, matériel, stocks et activité. Couverture perte d'exploitation, cyber-risques et responsabilité produits incluse.",
        suggestions: ['Devis entreprise', 'Protection globale', 'Perte exploitation', 'Cyber-risques']
      };
    }

    // Retirement/Savings
    if (message.match(/(prévoyance|prevoyance|retraite|épargne|epargne|avenir|placement)/i)) {
      return {
        text: "📈 Préparez sereinement votre avenir ! Solutions épargne retraite et prévoyance personnalisées. Avantages fiscaux, rendements attractifs, flexibilité des versements et transmission patrimoine optimisée.",
        suggestions: ['Devis prévoyance', 'Épargne retraite', 'Avantages fiscaux', 'Conseil patrimoine']
      };
    }

    // Pricing questions
    if (message.match(/(prix|tarif|coût|cout|cher|économie|economie|compétitif|competitif|gratuit)/i)) {
      return {
        text: "💰 Nos prix ? Les plus compétitifs ! Nous négocions avec nos partenaires pour vous garantir les meilleurs tarifs. Devis gratuit et sans engagement en 2 minutes. Comparaison transparente et conseils personnalisés inclus.",
        suggestions: ['Devis gratuit', 'Comparaison prix', 'Tarifs négociés', 'Sans engagement']
      };
    }

    // Quote requests
    if (message.match(/(devis|simulation|estimation|offre|proposition)/i)) {
      return {
        text: "📋 Devis gratuit en 2 minutes ! Remplissez notre formulaire en ligne pour recevoir votre devis personnalisé et sans engagement. Nos experts analysent votre profil et négocient les meilleures conditions pour vous.",
        suggestions: ['Formulaire devis', 'Devis rapide', 'Sans engagement', 'Expert dédié']
      };
    }

    // Contact information
    if (message.match(/(contact|téléphone|telephone|email|adresse|rendez-vous|rdv|conseiller)/i)) {
      return {
        text: "📞 Nos experts vous attendent !\n• Téléphone : +33 9 48 46 65 87\n• Email : contact@premiumassurances.fr\n• Adresse : 16 RUE CUVIER, 69006 LYON\n• Horaires : Lundi-Vendredi 9h-18h\n• Urgences : 24h/24",
        suggestions: ['Appeler maintenant', 'Envoyer email', 'Prendre RDV', 'Urgence 24h/24']
      };
    }

    // Hours/Availability
    if (message.match(/(horaire|ouvert|fermé|ferme|disponible|quand|heure)/i)) {
      return {
        text: "🕒 Nous sommes là pour vous !\n• Conseillers : Lundi-Vendredi 9h-18h\n• Urgences sinistres : 24h/24 - 7j/7\n• Devis en ligne : Disponible 24h/24\n• Réponse garantie sous 2h en semaine",
        suggestions: ['Nous contacter', 'Urgence sinistre', 'Devis en ligne', 'Callback']
      };
    }

    // Comparison questions
    if (message.match(/(comparer|comparaison|différence|difference|mieux|avantage|pourquoi)/i)) {
      return {
        text: "🎯 Pourquoi Premium Assurances ?\n✅ Tarifs négociés les plus bas\n✅ Experts spécialisés par profil\n✅ Devis gratuit en 2 minutes\n✅ Accompagnement personnalisé\n✅ Service client réactif\n✅ Partenaires de confiance",
        suggestions: ['Nos avantages', 'Témoignages clients', 'Devis comparatif', 'Parler à un expert']
      };
    }

    // Complaint or problem
    if (message.match(/(problème|probleme|souci|difficulté|difficulte|aide|aidez)/i)) {
      return {
        text: "😟 Je comprends votre préoccupation. Nos experts sont là pour résoudre tous vos problèmes d'assurance ! Que ce soit pour un sinistre, une résiliation, un malus ou toute autre difficulté, nous trouvons LA solution adaptée.",
        suggestions: ['Parler à un expert', 'Urgence sinistre', 'Résolution rapide', 'Accompagnement']
      };
    }

    // Specific situations
    if (message.match(/(sinistre|accident|vol|incendie|dégât|degat|urgence)/i)) {
      return {
        text: "🚨 Urgence sinistre ? Nous sommes là 24h/24 ! Contactez immédiatement notre service d'urgence au +33 9 48 46 65 87. Déclaration rapide, expertise immédiate et accompagnement complet jusqu'à l'indemnisation.",
        suggestions: ['Urgence 24h/24', 'Déclarer sinistre', 'Assistance immédiate', 'Suivi dossier']
      };
    }

    // Default intelligent response
    const responses = [
      {
        text: "Je vois que vous vous intéressez à nos services ! 😊 Pouvez-vous me préciser quel type d'assurance vous recherchez ? Je suis expert dans tous nos domaines et je peux vous donner des conseils très précis.",
        suggestions: ['Assurance Auto/Moto', 'Assurance Professionnelle', 'Assurance Santé', 'Tous nos services']
      },
      {
        text: "Excellente question ! 👍 Pour vous donner la réponse la plus précise, dites-moi en plus sur votre situation. Êtes-vous particulier ou professionnel ? Quel type de protection recherchez-vous ?",
        suggestions: ['Particulier', 'Professionnel', 'Comparer les offres', 'Conseil personnalisé']
      },
      {
        text: "Je suis là pour vous accompagner ! 🎯 Nos spécialités couvrent tous vos besoins : Auto/Moto (tous profils), Professionnelle (VTC, BTP, RC Pro), Santé, Habitation. Que puis-je vous expliquer en détail ?",
        suggestions: ['Auto tous profils', 'Assurance Pro', 'Santé & Habitation', 'Devis personnalisé']
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

    // Simulate more realistic typing delay
    const typingDelay = Math.min(inputText.length * 50 + 1000, 3000);
    
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

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-3xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 flex items-center">
            <Bot size={24} className="mr-3" />
            <div>
              <h3 className="font-bold">Assistant Premium Assurances</h3>
              <p className="text-sm opacity-90">Expert en assurances • En ligne</p>
            </div>
          </div>

          {/* Messages */}
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
                
                {/* Suggestions */}
                {message.isBot && message.suggestions && (
                  <div className="mt-3 flex flex-wrap gap-2 ml-10">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs rounded-full transition-colors border border-blue-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez-moi vos questions sur les assurances..."
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
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;