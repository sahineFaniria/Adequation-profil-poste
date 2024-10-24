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
import Accueil from '../Components/Candidate/Contenu/Accueil'
import Profile from '../Components/Candidate/Contenu/Profile'
import Postulation from '../Components/Candidate/Contenu/Postulation'
import SoumetCv from '../Components/Candidate/Contenu/SoumetCv'
import AllOffre from '../Components/Recruiter/contenu/AllOffre'
import MyProfile from '../Components/Recruiter/contenu/MyProfile'
import MesOffre from '../Components/Recruiter/contenu/MesOffre'
import CreerOffre from '../Components/Recruiter/contenu/CreerOffre'

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
        <Route path='candidate.com' element={<CandidateDash/>}>

          <Route index element={<Accueil/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='demande' element={<Postulation/>} />
          <Route path='cv' element={<SoumetCv/>} />

        </Route>
        <Route path='recruteur.com' element={<RecruiterDash/>} >
          <Route index element={<AllOffre/>} />
          <Route path='profile' element={<MyProfile/>} />
          <Route path='creer-offre' element={<CreerOffre/>} />
          
        </Route>
      </Routes>
    </div>
  )
}
