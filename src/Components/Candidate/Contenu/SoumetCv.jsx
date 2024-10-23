import React from 'react';

export default function SoumetCv() {
  return (
    <div className="max-w-4xl bg-white p-4">
      {/* Titre */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Ajouter des CV pour lancer l'adéquation profil-poste
      </h1>

      {/* Formulaire de soumission de CV */}
      <div className="flex flex-col items-start space-y-6">
        {/* Expérience */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Expérience :</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Décrivez votre expérience ici..."
          />
        </div>

        {/* Compétences */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Compétences :</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Listez vos compétences ici..."
          />
        </div>

        {/* Formations */}
        <div className="w-full">
          <label className="block text-gray-600 font-medium mb-2">Formations :</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Décrivez vos formations ici..."
          />
        </div>

        {/* Bouton de soumission */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Soumettre le CV
        </button>
      </div>
    </div>
  );
}
