import React from 'react';

export default function CvCard({ cv }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      <div className="text-lg font-bold text-gray-700">{cv.nom}</div>
      <div className="text-sm text-gray-500">{cv.poste}</div>
      
      {/* Experience */}
      <div className="mt-2">
        <p className="font-semibold text-sm text-black/80">Expérience:</p>
        <p className="text-sm text-gray-600">{cv.experience}</p>
      </div>

      {/* Compétences */}
      <div className="mt-2">
        <p className="font-semibold text-sm text-black/80">Compétences:</p>
        <ul className="list-disc list-inside text-sm text-gray-500">
          {cv.competence.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Formation */}
      <div className="mt-2">
        <p className="font-semibold text-sm text-black/80">Formation:</p>
        <p className="text-sm text-gray-600">{cv.formation}</p>
      </div>

      {/* Date de soumission */}
      <div className="mt-2 text-sm text-gray-500">Soumis le: {cv.dateSoumission}</div>

      {/* Statut */}
      <div className="mt-4 flex items-center">
        <span className={`py-1 px-3 rounded-lg text-white text-sm font-medium ${
          cv.statut === 'validée' ? 'bg-green-400' :
          cv.statut === 'en attente' ? 'bg-yellow-400' : 
          'bg-red-400'
        }`}>
          {cv.statut}
        </span>
      </div>
    </div>
  );
}
