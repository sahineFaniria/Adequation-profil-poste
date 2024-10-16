import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Search from '../../../ui/Dashboard/Search'
import Button from '../../../ui/button'
import RecruiterCard from '../../../ui/Dashboard/Content/RecruiterCard'

const recruiters = [
  { companyName: 'Entreprise A', email: 'contact@entreprisea.com', address: '123 Rue A' },
  { companyName: 'Business B', email: 'info@businessb.com', address: '456 Avenue B' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
  { companyName: 'Entreprise A', email: 'contact@entreprisea.com', address: '123 Rue A' },
  { companyName: 'Business B', email: 'info@businessb.com', address: '456 Avenue B' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
  { companyName: 'Entreprise A', email: 'contact@entreprisea.com', address: '123 Rue A' },
  { companyName: 'Business B', email: 'info@businessb.com', address: '456 Avenue B' },
  { companyName: 'Company C', email: 'hello@companyc.com', address: '789 Boulevard C' },
];


export default function Recruiter() {
  return (
    <div>
      <div className="w-full py-6 p-4 flex items-start flex-col justify-center gap-1 bg-gray-100 border-b-2 border-black/10 ">
        
          <Link to='/admin.com' className="text-sm flex items-center gap-2 text-gray-500 hover:cursor-pointer hover:text-blue-400"> <AiOutlineLeft/> Retour au tableau de bord </Link>
          <p className="font-medium">Sociétés et entreprises qui recrutent.</p>
       
      </div>
      <div className="w-full p-4 flex items-center justify-between ">
        <p className="font-medium">Liste récente</p>
        <div className="flex gap-2">
            <Search />
            <Button className="whitespace-nowrap" >+ Ajouter un recruteur</Button>
        </div> 
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {recruiters.map((recruiter, index) => (
          <RecruiterCard
            key={index}
            companyName={recruiter.companyName}
            email={recruiter.email}
            address={recruiter.address}
          />
        ))}
      </div>
    </div>
  )
}
