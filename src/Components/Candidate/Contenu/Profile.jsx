import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function Profile() {
  // Exemple de données du candidat
  const [candidateInfo, setCandidateInfo] = useState({
    email: 'example@example.com',
    nom: 'Doe',
    prenom: 'John',
    telephone: '+261 34 12 34 567',
    dateNaissance: '1990-05-15',
    niveauEtudes: 'Licence en Informatique',
    statutProfessionnel: 'Développeur Web'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidateInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logique pour enregistrer les données modifiées
  };

  return (
    <div className="max-w-4xl bg-white p-4 ">
      {/* Section de l'icône utilisateur */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-start">
          <div className="bg-blue-500 text-white rounded-full p-4">
            <FaUserCircle className="h-20 w-20" />
          </div>
          <h1 className="text-xl px-2 font-semibold text-gray-800 mt-4">
            {candidateInfo.prenom} {candidateInfo.nom}
          </h1>
        </div>
        <AiFillEdit
          className="text-gray-500 hover:text-blue-500 cursor-pointer text-2xl"
          onClick={() => setIsEditing(true)}
        />
      </div>

      {/* Section des informations personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isEditing ? (
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Nom :</label>
              <input
                type="text"
                name="nom"
                value={candidateInfo.nom}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Prénom :</label>
              <input
                type="text"
                name="prenom"
                value={candidateInfo.prenom}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Email :</label>
              <input
                type="email"
                name="email"
                value={candidateInfo.email}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Téléphone :</label>
              <input
                type="tel"
                name="telephone"
                value={candidateInfo.telephone}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Date de naissance :</label>
              <input
                type="date"
                name="dateNaissance"
                value={candidateInfo.dateNaissance}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Niveau d'études :</label>
              <input
                type="text"
                name="niveauEtudes"
                value={candidateInfo.niveauEtudes}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="text-gray-600">Statut professionnel :</label>
              <input
                type="text"
                name="statutProfessionnel"
                value={candidateInfo.statutProfessionnel}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleSave}
            >
              Modifier
            </button>
          </>
        ) : (
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Email :</p>
              <p className="text-gray-800 font-medium">{candidateInfo.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Téléphone :</p>
              <p className="text-gray-800 font-medium">{candidateInfo.telephone}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Date de naissance :</p>
              <p className="text-gray-800 font-medium">{candidateInfo.dateNaissance}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Niveau d'études :</p>
              <p className="text-gray-800 font-medium">{candidateInfo.niveauEtudes}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Statut professionnel :</p>
              <p className="text-gray-800 font-medium">{candidateInfo.statutProfessionnel}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
