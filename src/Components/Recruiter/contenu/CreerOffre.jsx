import React, { useState } from 'react';

export default function CreerOffre() {
  const [offerDetails, setOfferDetails] = useState({
    poste: '',
    secteur: '',
    ville: '',
    typeContrat: '',
    competence: '',
    experience: '',
    description: '',
    profil: '',
    email: '',
    dateLimite: '',
    salaire: '',
    lieuTravail: '',
    infoSupp: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleTextAreaFormatting = (action, field) => {
    // Logique de formatage pour appliquer gras, italique, souligné, etc.
  };

  return (
    <div className="w-full bg-white p-6">
      <h1 className="text-2xl font-bold mb-6">Créer une Offre</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Poste */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Poste :</label>
          <input
            type="text"
            name="poste"
            value={offerDetails.poste}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Intitulé du poste"
          />
        </div>

        {/* Secteur */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Secteur :</label>
          <select
            name="secteur"
            value={offerDetails.secteur}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
          >
            <option value="">Sélectionnez un secteur</option>
            <option value="restaurant/hotelerie">Restaurant/Hôtelerie</option>
            <option value="Direction/Administration">Direction/Administration</option>
            <option value="Transport">Transport</option>
            <option value="Social">Social</option>
            <option value="Gestion/comptabilite/finance">Gestion/Comptabilité/Finance</option>
            {/* Ajoutez d'autres secteurs selon vos besoins */}
          </select>
        </div>

        {/* Ville */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Ville :</label>
          <input
            type="text"
            name="ville"
            value={offerDetails.ville}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Ville"
          />
        </div>

        {/* Type de contrat */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Type de contrat :</label>
          <input
            type="text"
            name="typeContrat"
            value={offerDetails.typeContrat}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Ex: CDI, CDD, Stage"
          />
        </div>

        {/* Competence requise */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Compétence requise :</label>
          <div className="flex flex-col border border-gray-300 rounded-md p-2 mt-2">
            <textarea
              name="competence"
              value={offerDetails.competence}
              onChange={handleInputChange}
              className="w-full p-2 border-none"
              placeholder="Listez les compétences requises"
            />
            <div className="flex justify-start space-x-2 mt-2">
              {/* Boutons de mise en forme */}
              <button className="border p-1" onClick={() => handleTextAreaFormatting('bold', 'competence')}>B</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('italic', 'competence')}>I</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('underline', 'competence')}>U</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('list', 'competence')}>List</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-left', 'competence')}>Left</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-center', 'competence')}>Center</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-right', 'competence')}>Right</button>
            </div>
          </div>
        </div>

        {/* Experience requise */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Expérience requise :</label>
          <div className="flex flex-col border border-gray-300 rounded-md p-2 mt-2">
            <textarea
              name="experience"
              value={offerDetails.experience}
              onChange={handleInputChange}
              className="w-full p-2 border-none"
              placeholder="Expérience requise"
            />
            <div className="flex justify-start space-x-2 mt-2">
              {/* Boutons de mise en forme */}
              <button className="border p-1" onClick={() => handleTextAreaFormatting('bold', 'experience')}>B</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('italic', 'experience')}>I</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('underline', 'experience')}>U</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('list', 'experience')}>List</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-left', 'experience')}>Left</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-center', 'experience')}>Center</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-right', 'experience')}>Right</button>
            </div>
          </div>
        </div>

        {/* Description du poste */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Description du poste :</label>
          <div className="flex flex-col border border-gray-300 rounded-md p-2 mt-2">
            <textarea
              name="description"
              value={offerDetails.description}
              onChange={handleInputChange}
              className="w-full p-2 border-none"
              placeholder="Description du poste"
            />
            <div className="flex justify-start space-x-2 mt-2">
              {/* Boutons de mise en forme */}
              <button className="border p-1" onClick={() => handleTextAreaFormatting('bold', 'description')}>B</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('italic', 'description')}>I</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('underline', 'description')}>U</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('list', 'description')}>List</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-left', 'description')}>Left</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-center', 'description')}>Center</button>
              <button className="border p-1" onClick={() => handleTextAreaFormatting('align-right', 'description')}>Right</button>
            </div>
          </div>
        </div>

        {/* Profil recherché */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Profil recherché :</label>
          <textarea
            name="profil"
            value={offerDetails.profil}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Profil du candidat recherché"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Email de réception des candidatures :</label>
          <input
            type="email"
            name="email"
            value={offerDetails.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Email"
          />
        </div>

        {/* Date limite */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Date limite de candidature :</label>
          <input
            type="date"
            name="dateLimite"
            value={offerDetails.dateLimite}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
          />
        </div>

        {/* Salaire */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Salaire :</label>
          <input
            type="number"
            name="salaire"
            value={offerDetails.salaire}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Salaire proposé"
          />
        </div>

        {/* Lieu de travail */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Lieu de travail :</label>
          <input
            type="text"
            name="lieuTravail"
            value={offerDetails.lieuTravail}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Lieu de travail"
          />
        </div>

        {/* Info supplémentaire */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Informations supplémentaires :</label>
          <textarea
            name="infoSupp"
            value={offerDetails.infoSupp}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Autres informations"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white p-2 rounded-md mt-6 hover:bg-blue-600">
            Soumettre l'offre
          </button>
        </div>
      </div>
    </div>
  );
}
