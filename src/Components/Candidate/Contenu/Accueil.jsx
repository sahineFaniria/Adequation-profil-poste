import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../../ui/Dashboard/Search';
import { AiOutlineLeft } from 'react-icons/ai';
import CandidatureCard from '../../../ui/Dashboard/Content/CandCard';

export default function Accueil() {
    const offers = [
        {
          company: 'FID',
          jobTitle: 'Assistant Commercial',
          daysPublished: 1,
          requirements: ['Gestion', 'Comptabilité', 'Finance'],
          location: 'Antananarivo',
          candidates: [
            { name: 'Alice', role: 'Commercial', bgColor: 'blue', experience: '3 years', skills: ['Gestion', 'Comptabilité'] },
            { name: 'Bob', role: 'Assistant', bgColor: 'green', experience: '2 years', skills: ['Finance', 'Gestion'] },
            { name: 'Charlie', role: 'Analyste', bgColor: 'red', experience: '5 years', skills: ['Comptabilité', 'Finance'] },
            { name: 'Diana', role: 'Comptable', bgColor: 'pink', experience: '4 years', skills: ['Comptabilité', 'Audit'] },
          ]
        },
        {
          company: 'Rio Tinto',
          jobTitle: 'Développeur Web',
          daysPublished: 3,
          requirements: ['JavaScript', 'React', 'Node.js'],
          location: 'Antsirabe',
          candidates: [
            { name: 'Eve', role: 'Fullstack Developer', bgColor: 'yellow', experience: '4 years', skills: ['JavaScript', 'React'] },
            { name: 'Frank', role: 'Backend Developer', bgColor: 'blue', experience: '6 years', skills: ['Node.js', 'Express'] },
          ]
        },
        {
          company: 'ONN Anosy',
          jobTitle: 'Assistant Commercial',
          daysPublished: 1,
          requirements: ['Gestion', 'Comptabilité', 'Finance'],
          location: 'Antananarivo',
          candidates: [
            
            { name: 'Bob', role: 'Assistant', bgColor: 'green', experience: '2 years', skills: ['Finance', 'Gestion'] },
            { name: 'Charlie', role: 'Analyste', bgColor: 'red', experience: '5 years', skills: ['Comptabilité', 'Finance'] },
            { name: 'Diana', role: 'Comptable', bgColor: 'pink', experience: '4 years', skills: ['Comptabilité', 'Audit'] },
            { name: 'Alice', role: 'Commercial', bgColor: 'blue', experience: '3 years', skills: ['Gestion', 'Comptabilité'] },
            { name: 'Bob', role: 'Assistant', bgColor: 'green', experience: '2 years', skills: ['Finance', 'Gestion'] },
            { name: 'Charlie', role: 'Analyste', bgColor: 'red', experience: '5 years', skills: ['Comptabilité', 'Finance'] },
            { name: 'Diana', role: 'Comptable', bgColor: 'pink', experience: '4 years', skills: ['Comptabilité', 'Audit'] },
          ]
        },
        {
          company: 'DRENN',
          jobTitle: 'Développeur Web',
          daysPublished: 3,
          requirements: ['JavaScript', 'React', 'Node.js'],
          location: 'Antsirabe',
          candidates: [
            { name: 'Eve', role: 'Fullstack Developer', bgColor: 'yellow', experience: '4 years', skills: ['JavaScript', 'React'] },
            { name: 'Frank', role: 'Backend Developer', bgColor: 'blue', experience: '6 years', skills: ['Node.js', 'Express'] },
            { name: 'Frank', role: 'Backend Developer', bgColor: 'blue', experience: '6 years', skills: ['Node.js', 'Express'] },
          ]
        }
    ];
    
    return (
    <div>
        {/* Header with Back Link */}
        <div className="w-full py-6 p-4 flex items-start flex-col justify-center gap-1 bg-gray-100 border-b-2 border-black/10">
        <Link to="/admin.com" className="text-sm flex items-center gap-2 text-gray-500 hover:text-blue-400">
            <AiOutlineLeft /> Retour au tableau de bord
        </Link>
        <p className="font-medium">Candidatures de candidats aux offres créées par les sociétés et entreprises.</p>
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
