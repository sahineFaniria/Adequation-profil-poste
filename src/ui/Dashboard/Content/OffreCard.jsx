import React from 'react';

export default function OffreCard({ offre }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg shadow p-4 flex flex-col justify-between">
      {/* Nom de l'entreprise et date de publication */}
      <div className="text-gray-600 font-medium">
        {offre.entreprise}, <span className="text-sm">{offre.datePublication}</span>
      </div>
      
      {/* Titre du poste */}
      <h3 className="text-base font-semibold mt-2 text-black">{offre.titrePoste}</h3>

      {/* Exigences */}
      <div className="mt-2">
        <p className="font-semibold text-sm text-black/80">Exigences:</p>
        <ul className="list-disc list-inside text-gray-600 text-[14px]">
          <li>{offre.competence}</li>
          <li>{offre.experience}</li>
        </ul>
      </div>

      {/* Tâches à faire */}
      <div className="mt-2">
        <p className="font-semibold text-black/80">Tâches à faire:</p>
        <p className="text-gray-700 text-xs">{offre.taches}</p>
      </div>

      {/* Statut, Type de poste, Mode de travail */}
      <div className="mt-4 flex items-center justify-start gap-1">
        {/* Statut */}

        {/* Type de poste (e.g., Design, Développement) */}
        <span className="py-1 px-3 bg-blue-400 rounded-lg text-gray-800 text-sm font-medium">
          {offre.typePoste}
        </span>

        {/* Mode de travail (Remote ou Onsite) */}
        <span className="py-1 px-3 bg-gray-300 rounded-lg text-gray-700 text-sm font-medium">
          {offre.modeTravail}
        </span>

        <span
          className={`py-1 px-3 rounded-lg text-white text-sm font-medium ${
            offre.statut === 'validée'
              ? 'bg-green-400'
              : offre.statut === 'en attente'
              ? 'bg-yellow-400'
              : 'bg-red-400'
          }`}
        >
          {offre.statut}
        </span>
      </div>
    </div>
  );
}
