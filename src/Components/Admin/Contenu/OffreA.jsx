import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../../ui/Dashboard/Search';
import { AiOutlineLeft } from 'react-icons/ai';
import OffreCard from '../../../ui/Dashboard/Content/OffreCard';

export default function OffreA() {
  // Gestion de l'état pour l'onglet actif
  const [activeTab, setActiveTab] = useState('tous');

  // Fonction pour changer d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  

  const offres = [
    {
      entreprise: 'Company A',
      datePublication: '12 Oct 2024',
      titrePoste: 'UI Designer',
      competence: 'Design thinking, UX/UI principles',
      experience: '3 years of experience',
      taches: 'Create and manage design components...',
      statut: 'validée',
      typePoste: 'Design',
      modeTravail: 'Remote'
    },
    {
      entreprise: 'Company B',
      datePublication: '10 Oct 2024',
      titrePoste: 'Backend Developer',
      competence: 'Node.js, Express, MongoDB',
      experience: '5 years of experience',
      taches: 'Develop APIs and integrate services...',
      statut: 'en attente',
      typePoste: 'Développement',
      modeTravail: 'Onsite'
    },
    {
      entreprise: 'Company A',
      datePublication: '12 Oct 2024',
      titrePoste: 'UI Designer',
      competence: 'Design thinking, UX/UI principles',
      experience: '3 years of experience',
      taches: 'Create and manage design components...',
      statut: 'validée',
      typePoste: 'Design',
      modeTravail: 'Remote'
    },
    {
      entreprise: 'Company B',
      datePublication: '10 Oct 2024',
      titrePoste: 'Backend Developer',
      competence: 'Node.js, Express, MongoDB',
      experience: '5 years of experience',
      taches: 'Develop APIs and integrate services...',
      statut: 'Refusé',
      typePoste: 'Développement',
      modeTravail: 'Onsite'
    },
  ];
  
  // Function to filter CVs based on active tab
  const filtered = offres.filter(offre => activeTab === "tous" || offre.statut === activeTab);

  return (
    <div>
      {/* Header avec le lien retour et le titre */}
      <div className="w-full py-6 p-4 flex items-start flex-col justify-center gap-1 bg-gray-100 border-b-2 border-black/10">
        <Link
          to="/admin.com"
          className="text-sm flex items-center gap-2 text-gray-500 hover:cursor-pointer hover:text-blue-400"
        >
          <AiOutlineLeft /> Retour au tableau de bord
        </Link>
        <p className="font-medium">Offre créer par les sociétés et entreprises.</p>
      </div>

      {/* Barre de recherche et navigation des onglets */}
      <div className="w-full p-4 flex items-center justify-between">
        {/* Navigation des statuts */}
        <div className="flex gap-1 justify-center bg-gray-100 p-1 rounded-lg shadow-sm">
            {/* Onglet "Tous" */}
            <div
              className={`cursor-pointer whitespace-nowrap py-2 px-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'tous' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-400 hover:text-white`}
              onClick={() => handleTabChange('tous')}
            >
              Tous
            </div>
            {/* Onglet "En attente" */}
            <div
              className={`cursor-pointer whitespace-nowrap py-2 px-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'en attente' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-400 hover:text-white`}
              onClick={() => handleTabChange('en attente')}
            >
              En attente
            </div>

            {/* Onglet "Validée" */}
            <div
              className={`cursor-pointer py-2 px-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'validée' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-400 hover:text-white`}
              onClick={() => handleTabChange('validée')}
            >
              Validée
            </div>
                
            {/* Onglet "Refusée" */}
            <div
              className={`cursor-pointer py-2 px-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'refusée' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-400 hover:text-white`}
              onClick={() => handleTabChange('refusée')}
            >
              Refusée
            </div>
          </div>
        <div className="flex gap-2">
          <Search />
        </div>
      </div>
        

      {/* Contenu affiché selon l'onglet actif */}
      <div className="p-4">

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map((offre, index) => (
            <OffreCard key={index} offre={offre} />
          ))}
        </div>
 

        

      </div>
    </div>
  );
}

