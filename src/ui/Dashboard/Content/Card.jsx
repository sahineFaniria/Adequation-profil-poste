import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importation des icônes supplémentaires
import BoxContent from './BoxContent';

export default function Card({ title, total, Icon, totalClass }) {
  return (
    <div className="bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-lg p-1 transition-all duration-300">
      {/* Première section */}
      <div className="bg-white p-3 rounded-lg flex justify-between items-center border border-gray-200 mb-4 hover:border-blue-300">
        {/* Partie gauche: Titre et total */}
        <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-700">{title}</p>
            <p className={`text-sm w-20 px-2 rounded ${totalClass}`}>Total : {total}</p>
        </div>

        {/* Partie droite: Icône */}
        <div className="bg-white p-2 border border-gray-200 rounded-md hover:bg-blue-50">
          <Icon className="text-blue-500" /> {/* Icône passée en tant que prop */}
        </div>
      </div>

      {/* Deuxième section */}
      <div className="px-4 flex items-center justify-between text-gray-600 hover:text-blue-500 ">
        <p className="text-sm font-medium cursor-pointer">Voir détail</p>
        <FaArrowRight className='cursor-pointer' /> {/* Icône de flèche */}
      </div>

    </div>
  );
}
