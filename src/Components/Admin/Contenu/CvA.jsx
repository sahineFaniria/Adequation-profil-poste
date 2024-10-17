import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Search from '../../../ui/Dashboard/Search';
import CvCard from '../../../ui/Dashboard/Content/CvCard';

export default function CvA() {

  const [activeTab, setActiveTab] = useState('tous');
  
  const cvs = [
    {
      nom: 'Candidate A',
      poste: 'Frontend Developer',
      experience: '3 years in React and JavaScript',
      competence: ['React', 'JavaScript', 'CSS'],
      formation: 'Master in Computer Science',
      dateSoumission: '10 Oct 2024',
      statut: 'validée'
    },
    {
      nom: 'Candidate B',
      poste: 'UI/UX Designer',
      experience: '5 years in Design',
      competence: ['Sketch', 'Figma', 'Photoshop'],
      formation: 'Bachelor in Design',
      dateSoumission: '12 Oct 2024',
      statut: 'en attente'
    },
    {
      nom: 'Candidate C',
      poste: 'Backend Developer',
      experience: '4 years in Node.js',
      competence: ['Node.js', 'MongoDB', 'Express'],
      formation: 'Master in Software Engineering',
      dateSoumission: '15 Oct 2024',
      statut: 'refusée'
    }
  ];

  // Function to filter CVs based on active tab
  const filteredCvs = cvs.filter(cv => activeTab === 'tous' || cv.statut === activeTab);

  // Function to change active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="w-full py-6 p-4 flex items-start flex-col justify-center gap-1 bg-gray-100 border-b-2 border-black/10">
        <Link
          to="/admin.com"
          className="text-sm flex items-center gap-2 text-gray-500 hover:cursor-pointer hover:text-blue-400"
        >
          <AiOutlineLeft /> Retour au tableau de bord
        </Link>
        <p className="font-medium">Cv créer par les candidates pour lancer l'adéquation Profil-Poste.</p>
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
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCvs.map((cv, index) => (
          <CvCard key={index} cv={cv} />
        ))}
      </div>

    </div>
  )
}
