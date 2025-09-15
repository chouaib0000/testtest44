import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Bonjour ! 👋 Je suis votre assistant virtuel Premium Assurances. Comment puis-je vous aider aujourd'hui ?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): ChatbotResponse => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return {
        text: "Bonjour ! 😊 Je suis là pour vous aider avec vos questions d'assurance. Que souhaitez-vous savoir ?",
        suggestions: ['Types d\'assurance', 'Obtenir un devis', 'Nous contacter']
      };
    }
    
    // Auto insurance
    if (message.includes('auto') || message.includes('voiture') || message.includes('moto')) {
      return {
        text: "🚗 Notre assurance auto/moto couvre tous les profils : bons conducteurs, risques aggravés, malussés et résiliés. Nous trouvons la solution adaptée à votre situation !",
        suggestions: ['Devis auto', 'Profils spéciaux', 'Garanties auto']
      };
    }
    
    // Professional insurance
    if (message.includes('professionnel') || message.includes('entreprise') || message.includes('rc pro')) {
      return {
        text: "💼 Nous proposons plusieurs assurances professionnelles : RC Pro, RC Décennale, Auto Pro (VTC/Taxi), et Multirisque Entreprise. Quelle est votre activité ?",
        suggestions: ['RC Professionnelle', 'RC Décennale', 'Auto Professionnelle']
      };
    }
    
    // VTC/Taxi
    if (message.includes('vtc') || message.includes('taxi') || message.includes('chauffeur')) {
      return {
        text: "🚕 Notre assurance auto professionnelle est spécialement conçue pour les VTC, taxis et transporteurs. Excellent rapport qualité-prix avec couverture complète !",
        suggestions: ['Devis VTC', 'Garanties pro', 'Tarifs chauffeur']
      };
    }
    
    // Construction/Building
    if (message.includes('décennale') || message.includes('btp') || message.includes('artisan') || message.includes('architecte')) {
      return {
        text: "🏗️ La RC Décennale est obligatoire pour les professionnels du bâtiment. Nous couvrons maîtres d'œuvre, artisans et architectes avec des tarifs compétitifs.",
        suggestions: ['Devis décennale', 'Métiers couverts', 'Garanties BTP']
      };
    }
    
    // Fleet insurance
    if (message.includes('flotte') || message.includes('parc') || message.includes('véhicules')) {
      return {
        text: "🚛 Notre assurance flotte couvre votre parc de véhicules (commerciaux, utilitaires, engins de chantier) avec un seul contrat aux prix les plus compétitifs !",
        suggestions: ['Devis flotte', 'Types véhicules', 'Avantages groupés']
      };
    }
    
    // Health insurance
    if (message.includes('santé') || message.includes('mutuelle') || message.includes('médical')) {
      return {
        text: "❤️ Notre assurance santé offre une couverture optimale pour vous et votre famille avec des remboursements adaptés à vos besoins et votre budget.",
        suggestions: ['Devis santé', 'Garanties famille', 'Remboursements']
      };
    }
    
    // Home insurance
    if (message.includes('habitation') || message.includes('logement') || message.includes('maison')) {
      return {
        text: "🏠 Protégez votre logement et vos biens avec notre assurance habitation. Garanties personnalisées selon vos besoins spécifiques.",
        suggestions: ['Devis habitation', 'Garanties logement', 'Protection biens']
      };
    }
    
    // Quote request
    if (message.includes('devis') || message.includes('prix') || message.includes('tarif') || message.includes('coût')) {
      return {
        text: "📋 Parfait ! Pour obtenir votre devis gratuit et personnalisé, vous pouvez remplir notre formulaire en ligne ou nous contacter directement.",
        suggestions: ['Formulaire devis', 'Appeler maintenant', 'Email contact']
      };
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('téléphone') || message.includes('email') || message.includes('adresse')) {
      return {
        text: "📞 Vous pouvez nous contacter :\n• Téléphone : +33 9 48 46 65 87\n• Email : contact@premiumassurances.fr\n• Adresse : 16 RUE CUVIER, 69006 LYON",
        suggestions: ['Appeler maintenant', 'Envoyer email', 'Formulaire contact']
      };
    }
    
    // Hours/Availability
    if (message.includes('horaire') || message.includes('ouvert') || message.includes('disponible')) {
      return {
        text: "🕒 Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h. Pour les urgences, notre service client est joignable 24h/24.",
        suggestions: ['Nous contacter', 'Service urgence', 'Prendre RDV']
      };
    }
    
    // Pricing/Competitive
    if (message.includes('compétitif') || message.includes('moins cher') || message.includes('économie')) {
      return {
        text: "💰 Nous négocions les meilleurs tarifs avec nos partenaires assureurs. Notre comparateur vous garantit des prix compétitifs sans compromis sur la qualité !",
        suggestions: ['Comparer les prix', 'Nos avantages', 'Devis gratuit']
      };
    }
    
    // Default response
    return {
      text: "Je comprends votre question. Pour vous donner la meilleure réponse, pouvez-vous me préciser quel type d'assurance vous intéresse ? Nos spécialités : Auto/Moto, Professionnelle, Santé, Habitation.",
      suggestions: ['Assurance Auto', 'Assurance Pro', 'Assurance Santé', 'Nous contacter']
    };
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
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    handleSendMessage();
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
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700'
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
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-3xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 flex items-center">
            <Bot size={24} className="mr-3" />
            <div>
              <h3 className="font-bold">Assistant Premium Assurances</h3>
              <p className="text-sm opacity-90">En ligne maintenant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
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
                      ? 'bg-white border border-gray-200 text-gray-800' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
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