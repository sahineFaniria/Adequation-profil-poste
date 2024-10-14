import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import AdminDash from '../Components/Admin/AdminDash'
import CandidateDash from '../Components/Candidate/CandidateDash'
import RecruiterDash from '../Components/Recruiter/RecruiterDash'

export default function PrivateRoute() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Login/>} />
        <Route path='/admin.com' element={<AdminDash/>} />
        <Route path='/candidate.com' element={<CandidateDash/>} />
        <Route path='/recruteur.com' element={<RecruiterDash/>} />
      </Routes>
    </div>
  )
}
