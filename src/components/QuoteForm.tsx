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
    
    try {
      const { error } = await supabase
        .from('submissions')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          insurance_type: formData.insuranceType,
          message: formData.message
        }]);

      if (error) throw error;
      
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
    <section id="quote-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-blue-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Pourquoi utiliser notre formulaire ?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Gain de temps</h3>
                    <p className="text-blue-100">Plus besoin de passer des heures à chercher et comparer des offres, nous faisons le travail pour vous.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Offres sur mesure</h3>
                    <p className="text-blue-100">Nos suggestions sont basées sur vos besoins réels, vous garantissant des offres adaptées.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Sécurité et simplicité</h3>
                    <p className="text-blue-100">Votre demande est traitée en toute confidentialité, avec un formulaire sécurisé pour protéger vos informations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Obtenir un devis gratuit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">Type d'assurance</label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="auto">Assurance Auto & Moto</option>
                    <option value="sante">Assurance Santé</option>
                    <option value="habitation">Assurance Habitation</option>
                    <option value="professionnel">Responsabilité Civile Pro</option>
                    <option value="entreprise">Multirisque Entreprise</option>
                    <option value="prevoyance">Prévoyance & Retraite</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}
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