import React from 'react'
import BoxContent from '../../../ui/Dashboard/Content/BoxContent';
import Card from '../../../ui/Dashboard/Content/Card';
import { FaUserTie, FaUser, FaBriefcase, FaFileAlt } from 'react-icons/fa';


export default function Analitics() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Recruteur" total={50} Icon={FaUserTie} totalClass="text-green-600 bg-green-200" />
            <Card title="Candidat" total={120} Icon={FaUser} totalClass="text-red-600 bg-red-200" />
            <Card title="Offre" total={75} Icon={FaBriefcase} totalClass="text-blue-600 bg-blue-200" />
            <Card title="Candidature" total={30} Icon={FaFileAlt} totalClass="text-purple-600 bg-purple-200" />
        </div>
        <div className="mt-4 h-auto grow"> 
            <BoxContent /> 
        </div>
    </div>
  )
}
