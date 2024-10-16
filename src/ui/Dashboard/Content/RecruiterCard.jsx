import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FiEdit, FiInfo, FiTrash2 } from 'react-icons/fi';
import clsx from 'clsx';

// Fonction pour générer un fond de couleur basé sur le nom de l'entreprise
const getColorFromName = (name) => {
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-indigo-500'];
  const charCodeSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[charCodeSum % colors.length];
};

// Composant de la carte du recruteur
const RecruiterCard = ({ companyName, email, address }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const abbreviation = companyName.charAt(0).toUpperCase();
  const bgColor = getColorFromName(companyName);

  // Fonction pour fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Fonction pour basculer le menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Bascule entre ouvert/fermé
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm relative">
      {/* Partie supérieure */}
      <div className="flex items-center justify-between pb-2 border-b">
        <div className="flex items-center gap-3">
          {/* Abbréviation avec fond coloré */}
          <div className={clsx('rounded-full h-10 w-10 flex items-center justify-center text-white font-bold', bgColor)}>
            {abbreviation}
          </div>
          <div>
            <p className="font-medium text-lg">{companyName}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>

      {/* Partie inférieure */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm text-gray-500">{address}</p>
        <div className="relative">
          <BsThreeDots
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={toggleMenu} // Utilise la fonction de bascule pour ouvrir/fermer le menu
          />
          {/* Menu contextuel */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-sm text-gray-700">
                <FiEdit /> Modifier
              </button>
              <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-sm text-gray-700">
                <FiInfo /> Détails
              </button>
              <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-sm text-gray-700">
                <FiTrash2 /> Supprimer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;
