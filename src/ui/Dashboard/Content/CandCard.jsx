import React, { useState } from 'react';
import { BsBuilding, BsBuildings, BsThreeDotsVertical } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import CandidateModal from '../Modal/CandModal';

export default function CandidatureCard({ offer }) {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Show up to 3 candidates by default
  const displayedCandidates = expanded ? offer.candidates : offer.candidates.slice(0, 3);

  return (
    <div className="bg-white border-b border-gray-300 p-4 mb-1 w-full flex flex-col md:flex-row gap-6">
      {/* Left Side: Company Icon and Name */}
      <div className="flex flex-col items-start md:items-center justify-start w-full md:w-1/6 md:border-r-2 md:border-gray-300">
        <div className="bg-blue-500 text-white rounded-xl h-14 w-14 flex items-center justify-center text-2xl">
          <BsBuildings />
        </div>
        <p className="mt-2 text-lg font-medium text-gray-700 text-center">{offer.company}</p>
      </div>

      {/* Right Side: Job and Candidates Section */}
      <div className="flex-grow w-full md:w-3/4">
        {/* Job offer details */}
        <div className="flex flex-col justify-between items-start mb-4">
          {/* Job Details */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-black">{offer.jobTitle}</h3>
            <p className="text-sm text-gray-500">Publié il y a {offer.daysPublished} jour(s)</p>
            <p className="text-sm text-gray-600">{offer.requirements.join(', ')}</p>
            <div className="flex items-center text-gray-500 mt-1">
              <MdLocationOn className="mr-1" /> {offer.location}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-1"></div>

        {/* Candidates Section */}
        <div>
          <p className="font-medium text-gray-700 mb-2">Candidatures ({offer.candidates.length})</p>
          <div className="flex flex-wrap gap-4">
            {displayedCandidates.map((candidate, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg w-full sm:w-48 md:w-64">
                <div className="flex items-center">
                  <div className={`bg-${candidate.bgColor}-500 text-white rounded-full h-10 w-10 flex items-center justify-center`}>
                    {candidate.name[0]} {/* First letter of candidate's name */}
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-800">{candidate.name}</p>
                    <p className="text-xs text-gray-500">{candidate.role}</p>
                  </div>
                </div>
                <BsThreeDotsVertical
                  className="text-gray-400 cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
              </div>
            ))}
          </div>

          {/* Show more/less button */}
          {offer.candidates.length > 3 && (
            <button
              className="mt-4 text-blue-500 flex items-center gap-1 text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Voir moins' : 'Voir plus'}
              <AiOutlinePlus className={`${expanded ? 'rotate-45' : ''} transition-transform`} />
            </button>
          )}
        </div>
      </div>

      {/* Candidate Modal */}
      {showModal && <CandidateModal candidate={offer.candidates[0]} onClose={() => setShowModal(false)} />}
    </div>
  );
}
