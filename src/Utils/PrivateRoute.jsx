import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import AdminDash from '../Components/Admin/AdminDash'
import CandidateDash from '../Components/Candidate/CandidateDash'
import RecruiterDash from '../Components/Recruiter/RecruiterDash'
import Analitics from '../Components/Admin/Contenu/Analitics'
import Recruiter from '../Components/Admin/Contenu/Recruiter'
import CandidateA from '../Components/Admin/Contenu/CandidateA'
import OffreA from '../Components/Admin/Contenu/OffreA'
import CvA from '../Components/Admin/Contenu/CvA'
import CandidatureA from '../Components/Admin/Contenu/CandidatureA'

export default function PrivateRoute() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Login/>} />
        <Route path='admin.com' element={<AdminDash />}>
       
          <Route index element={<Analitics />} /> 
          <Route path="recruteur" element={<Recruiter />} />
          <Route path='candidate' element={ <CandidateA/> }  />
          <Route path='offre' element={ <OffreA /> }  />
          <Route path='cv' element={ <CvA/> }  />
          <Route path='candidature' element={ <CandidatureA/> }  />
        
        </Route>
        <Route path='candidate.com' element={<CandidateDash/>} />
        <Route path='recruteur.com' element={<RecruiterDash/>} />
      </Routes>
    </div>
  )
}
