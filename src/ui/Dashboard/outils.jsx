import React from 'react';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { FiSun } from 'react-icons/fi';

export default function Outils() {
  return (
    <div className="flex flex-row gap-2">
        <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md hover:cursor-pointer hover:bg-gray-100">
        <FiSun className=' text-gray-500' />
        </div>
        <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md hover:cursor-pointer hover:bg-gray-100">
        <FaBell className=' text-gray-500' />
        </div>
        <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md hover:cursor-pointer hover:bg-gray-100">
        <FaUser className=' text-gray-500' />
        </div>
    </div>
  )
}
