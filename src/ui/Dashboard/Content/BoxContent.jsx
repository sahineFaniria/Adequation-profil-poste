import React from 'react';
import { FaList, FaListAlt, FaListOl, FaListUl, FaUser } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
import StatItem from './StatItem';

export default function BoxContent() {

  const stats = [
    { title: 'Offre validée', value: '30000' },
    { title: 'Offre en attente', value: '15000' },
    { title: 'Candidature reçue', value: '20000' },
    { title: 'Candidature acceptée', value: '10000' }
  ];


  return (
    <div className="flex w-full flex-col md:flex-row gap-4 h-[420px]">
      {/* Première boîte: 70% de la largeur */}
      <div className="w-full md:w-[70%] bg-gray-50 border border-gray-200 hover:border-blue-200 p-1 rounded-lg h-full">
        <div className="bg-white text-black/80 border rounded-[6px] border-gray-300 p-4 h-full font-bold hover:border-blue-200">
          {/* Contenu à venir, comme un histogramme */}
          Histogramme
        </div>
      </div>

      {/* Deuxième boîte: 30% de la largeur */}
      <div className="w-full md:w-[30%] bg-gray-50 border border-gray-200 hover:border-blue-200 rounded-lg p-1 h-full">
        <div className="bg-white text-black/80 border rounded-[6px] border-gray-300 p-4 h-full font-bold hover:border-blue-200">

        {stats.map((stat, index) => (
          <div key={index}>
            {/* Affichage du composant StatItem */}
            <StatItem title={stat.title} value={stat.value} />
            
            {/* Ajout d'une ligne de séparation sauf pour le dernier élément */}
            {index !== stats.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}
