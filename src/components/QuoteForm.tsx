import React, { useState } from 'react';
import { Clock, Lock, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

type InsuranceType = 'auto' | 'sante' | 'habitation' | 'professionnel' | 'entreprise' | 'prevoyance';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insuranceType: InsuranceType;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  insuranceType: 'auto',
  message: '',
};

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Submitting form data:', formData);
    
    try {
      const submissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        insurance_type: formData.insuranceType,
        message: formData.message.trim() || null
      };

      console.log('Prepared submission data:', submissionData);

      const { data, error } = await supabase
        .from('submissions')
        .insert([submissionData])
        .select();

      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }

      console.log('Successfully inserted:', data);
      
      toast.success('Votre demande a été envoyée avec succès !');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-3xl overflow-hidden border-2 border-white/50">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-10">
              <h2 className="text-3xl font-extrabold mb-8 leading-tight">
                Pourquoi utiliser notre 
                <span className="block text-yellow-300">formulaire ?</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40 shadow-lg">
                    <Clock className="w-8 h-8 flex-shrink-0 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-xl text-yellow-300">⚡ Gain de temps</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">Plus besoin de passer des heures à chercher et comparer des offres, nous faisons le travail pour vous.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40 shadow-lg">
                    <CheckCircle className="w-8 h-8 flex-shrink-0 text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-xl text-green-300">🎯 Offres sur mesure</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">Nos suggestions sont basées sur vos besoins réels, vous garantissant des offres adaptées.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40 shadow-lg">
                    <Lock className="w-8 h-8 flex-shrink-0 text-pink-300" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-xl text-pink-300">🔒 Sécurité et simplicité</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">Votre demande est traitée en toute confidentialité, avec un formulaire sécurisé pour protéger vos informations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-10">
              <h2 className="text-3xl font-extrabold mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ✨ Obtenir un devis gratuit
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                      👤 Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                      👤 Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      📧 Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      📱 Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                      required
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-bold text-gray-700 mb-2">
                    🎯 Type d'assurance
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                    required
                  >
                    <option value="auto">🚗 Assurance Auto & Moto</option>
                    <option value="rc-decennale">🏗️ RC Décennale</option>
                    <option value="auto-pro">🚕 Assurance Auto Professionnelle</option>
                    <option value="flotte">🚛 Assurance Flotte de Véhicules</option>
                    <option value="rc-pro">🛡️ Responsabilité Civile Pro</option>
                    <option value="sante">❤️ Assurance Santé</option>
                    <option value="habitation">🏠 Assurance Habitation</option>
                    <option value="entreprise">💼 Multirisque Entreprise</option>
                    <option value="prevoyance">📈 Prévoyance & Retraite</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    💬 Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-medium"
                    placeholder="Dites-nous en plus sur vos besoins..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? '⏳ Envoi en cours...' : '🚀 Obtenir mon devis gratuit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
