import React from 'react'
import { FaEllipsisH, FaEllipsisV, FaListUl } from 'react-icons/fa';

export default function StatItem({ title, value }) {
    return (
      <div className="w-full p-3 flex justify-between items-center">
        <div className="flex flex-col">
          <p className=" font-semibold text-black ">{title}</p>
          <p className="text-sm text-gray-500 w-20 px-2 rounded">{value}</p>
        </div>
        <div className="bg-white p-2 rounded-md hover:bg-blue-50 hover:cursor-pointer">
            <FaEllipsisV className=" text-gray-600" /> 
        </div>
      </div>
    );
  }