import React from 'react';

export default function CandidateModal({ candidate, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Détails du candidat</h2>
        <p><strong>Nom:</strong> {candidate.name}</p>
        <p><strong>Poste:</strong> {candidate.role}</p>
        <p><strong>Expérience:</strong> {candidate.experience}</p>
        <p><strong>Compétences:</strong> {candidate.skills.join(', ')}</p>

        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

