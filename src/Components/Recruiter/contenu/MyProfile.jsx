import React, { useState } from 'react';
import { FaBuilding, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Icônes pour représenter les réseaux sociaux
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'; // Icônes d'édition et de fermeture

export default function MyProfile() {
  const [recruiterInfo, setRecruiterInfo] = useState({
    nomEntreprise: 'TAKALOU', // Nom de l'entreprise par défaut
    slogan: '',
    secteurActivite: '',
    raisonSociale: '',
    telephone: '',
    adresse: '',
    facebook: 'http://www.facebook.com',
    linkedin: 'http://www.linkedin.com',
    apropos: '', // Section à propos de l'entreprise
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecruiterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logique pour enregistrer les données modifiées
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Logique pour annuler les modifications, réinitialiser si nécessaire
  };

  return (
    <div className="max-w-4xl bg-white p-4">
      {/* Section de l'icône et du nom de l'entreprise */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full p-4">
            <FaBuilding className="h-10 w-10" />
          </div>
          <div className="ml-4">
            {/* Titre et champ pour le nom de l'entreprise */}
            <h2 className="text-gray-600">Nom de l'entreprise :</h2>
            {isEditing ? (
              <input
                type="text"
                name="nomEntreprise"
                value={recruiterInfo.nomEntreprise}
                onChange={handleInputChange}
                className="text-base font-semibold text-gray-800 border border-gray-300 rounded-md p-2"
              />
            ) : (
              <h1 className="text-xl font-semibold text-gray-800">{recruiterInfo.nomEntreprise}</h1>
            )}
            
            {/* Slogan */}
            <h3 className="text-gray-600 mt-2">Slogan :</h3>
            {isEditing ? (
              <input
                type="text"
                name="slogan"
                value={recruiterInfo.slogan}
                onChange={handleInputChange}
                className="text-base w-96 text-gray-800 border border-gray-300 rounded-md p-2"
                placeholder="Entrez un slogan"
              />
            ) : (
              <p className="text-gray-600">{recruiterInfo.slogan || '---'}</p>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="flex space-x-4">
            <button onClick={handleCancel}>
              <AiOutlineClose className="text-gray-500 hover:text-red-500 cursor-pointer text-2xl" />
            </button>
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Modifier
            </button>
          </div>
        ) : (
          <AiFillEdit
            className="text-gray-500 hover:text-blue-500 cursor-pointer text-2xl"
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>

      {/* Section des informations de l'entreprise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Secteur d'activité :</p>
          {isEditing ? (
            <input
              type="text"
              name="secteurActivite"
              value={recruiterInfo.secteurActivite}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-800 font-medium">{recruiterInfo.secteurActivite || '---'}</p>
          )}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Raison sociale :</p>
          {isEditing ? (
            <input
              type="text"
              name="raisonSociale"
              value={recruiterInfo.raisonSociale}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-800 font-medium">{recruiterInfo.raisonSociale || '---'}</p>
          )}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Téléphone :</p>
          {isEditing ? (
            <input
              type="tel"
              name="telephone"
              value={recruiterInfo.telephone}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-800 font-medium">{recruiterInfo.telephone || '---'}</p>
          )}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Adresse :</p>
          {isEditing ? (
            <input
              type="text"
              name="adresse"
              value={recruiterInfo.adresse}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-800 font-medium">{recruiterInfo.adresse || '---'}</p>
          )}
        </div>
      </div>

      {/* Section A propos */}
      <div className="mt-6 pl-4">
        <h3 className="text-gray-600">À propos :</h3>
        {isEditing ? (
          <textarea
            name="apropos"
            value={recruiterInfo.apropos}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="text-gray-800">{recruiterInfo.apropos || 'Aucune description fournie.'}</p>
        )}
      </div>

      {/* Section des réseaux sociaux */}
      <div className="mt-6 pl-4">
        <h3 className="text-gray-600">Réseaux sociaux :</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-2">
          <div className="flex items-center ">
            <FaFacebook className="text-blue-600 text-2xl mr-2" />
            {isEditing ? (
              <input
                type="url"
                name="facebook"
                value={recruiterInfo.facebook}
                onChange={handleInputChange}
                className="w-full text-sm mt-1 p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <a
                href={recruiterInfo.facebook}
                className="text-blue-600 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {recruiterInfo.facebook}
              </a>
            )}
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-blue-700 text-2xl mr-2" />
            {isEditing ? (
              <input
                type="url"
                name="linkedin"
                value={recruiterInfo.linkedin}
                onChange={handleInputChange}
                className="w-full text-sm mt-1 p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <a
                href={recruiterInfo.linkedin}
                className="text-blue-700 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {recruiterInfo.linkedin}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
