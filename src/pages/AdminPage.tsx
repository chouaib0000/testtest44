import React, { useState, useEffect } from 'react';
import { Trash2, Search, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';
import useSound from 'use-sound';
import { supabase } from '../lib/supabase';

interface Submission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  insurance_type: string;
  message: string;
  created_at: string;
}

const AdminPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [previousCount, setPreviousCount] = useState(0);
  
  const [playNotification] = useSound('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data && data.length > previousCount) {
        playNotification();
        toast.success('Nouvelle demande reçue !');
      }

      setPreviousCount(data?.length || 0);
      setSubmissions(data || []);
    } catch (error) {
      toast.error('Erreur lors du chargement des demandes');
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
    
    // Set up auto-refresh every 30 seconds
    const interval = setInterval(loadSubmissions, 30000);
    
    // Subscribe to real-time changes
    const subscription = supabase
      .channel('submissions_changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'submissions' 
      }, () => {
        loadSubmissions();
      })
      .subscribe();

    return () => {
      clearInterval(interval);
      subscription.unsubscribe();
    };
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette demande ?')) {
      try {
        const { error } = await supabase
          .from('submissions')
          .delete()
          .eq('id', id);

        if (error) throw error;

        setSubmissions(prev => prev.filter(item => item.id !== id));
        setPreviousCount(prev => prev - 1);
        toast.success('Demande supprimée avec succès');
      } catch (error) {
        toast.error('Erreur lors de la suppression de la demande');
        console.error('Error deleting submission:', error);
      }
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const searchString = searchTerm.toLowerCase();
    return (
      submission.first_name.toLowerCase().includes(searchString) ||
      submission.last_name.toLowerCase().includes(searchString) ||
      submission.email.toLowerCase().includes(searchString) ||
      submission.phone.toLowerCase().includes(searchString)
    );
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getInsuranceTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      auto: 'Auto & Moto',
      sante: 'Santé',
      habitation: 'Habitation',
      professionnel: 'RC Pro',
      entreprise: 'Multirisque Entreprise',
      prevoyance: 'Prévoyance & Retraite',
    };
    return types[type] || type;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord administrateur</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Actualisation auto. toutes les 30s</span>
            <button
              onClick={loadSubmissions}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <RefreshCw size={18} className="mr-1" />
              Actualiser
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom, prénom, email ou téléphone..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
            <p>Chargement des demandes...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              {searchTerm ? 'Aucun résultat pour cette recherche' : 'Aucune demande de devis pour le moment'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prénom
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(submission.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {submission.first_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {submission.last_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{submission.email}</div>
                      <div className="text-sm text-gray-500">{submission.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {getInsuranceTypeLabel(submission.insurance_type)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {submission.message || <span className="text-gray-400 italic">Aucun message</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;