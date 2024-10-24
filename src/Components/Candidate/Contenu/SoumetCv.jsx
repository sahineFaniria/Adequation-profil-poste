import React from 'react';

export default function SoumetCv() {
  return (
    <div className="max-w-4xl bg-white p-4">
      {/* Titre */}
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-bold text-gray-800 mb-4">
          Ajouter des CV pour lancer l'adéquation profil-poste
        </h1>
        {/* Bouton de soumission */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Soumettre le CV
        </button>
      </div>
      

      {/* Formulaire de soumission de CV */}
      <div className="flex flex-col items-start space-y-6">
        {/* Expérience */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Expérience :</label>
          <textarea
            className="w-full text-sm p-2 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Décrivez votre expérience ici..."
          />
        </div>

        {/* Compétences */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Compétences :</label>
          <textarea
            className="w-full text-sm p-2 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Listez vos compétences ici..."
          />
        </div>

        {/* Formations */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Formations :</label>
          <textarea
            className="w-full text-sm p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Décrivez vos formations ici..."
          />
        </div>

        
      </div>
    </div>
  );
}
