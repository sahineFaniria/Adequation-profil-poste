import React from 'react';
import Search from '../../../ui/Dashboard/Search';
import { AiOutlineLeft } from 'react-icons/ai';
import CandidatureCard from '../../../ui/Dashboard/Content/CandCard';
import { Link } from 'react-router-dom';

export default function Postulation() {
  const offers = [
    {
      company: 'FID',
      jobTitle: 'Assistant Commercial',
      daysPublished: 1,
      requirements: ['Gestion', 'Comptabilité', 'Finance'],
      location: 'Antananarivo',
      candidates: [
        { name: 'Alice', role: 'Commercial', bgColor: 'blue', experience: '3 years', skills: ['Gestion', 'Comptabilité'] },
      
      ]
    },
    {
      company: 'Rio Tinto',
      jobTitle: 'Développeur Web',
      daysPublished: 3,
      requirements: ['JavaScript', 'React', 'Node.js'],
      location: 'Antsirabe',
      candidates: [
        { name: 'Alice', role: 'Fullstack Developer', bgColor: 'yellow', experience: '4 years', skills: ['JavaScript', 'React'] },
      
      ]
    }
];

return (
<div>
    {/* Header with Back Link */}
    <div className="w-full py-6 p-4 flex items-start flex-col justify-center gap-1 bg-gray-100 border-b-2 border-black/10">
    <Link to="/admin.com" className="text-sm flex items-center gap-2 text-gray-500 hover:text-blue-400">
        <AiOutlineLeft /> Somettre un cv
    </Link>
    <p className="font-medium">Mes contributions aux offres creer par l'entreprises.</p>
    </div>

    {/* Search Bar */}
    <div className="w-full p-4 flex items-center justify-between">
    <p className="font-medium">Toutes les offres d'emplois à Madagascar</p>
    <div className="flex gap-2">
        <Search />
    </div>
    </div>

    {/* Candidature Cards */}
    <div className="border-t border-gray-300">
    {offers.map((offer, index) => (
        <CandidatureCard key={index} offer={offer} />
    ))}
    </div>
</div>
);
}

