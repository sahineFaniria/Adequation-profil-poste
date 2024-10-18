import React from 'react';
import NavLinks from '../NavLinks';
import { FaPowerOff } from 'react-icons/fa';
import { TbNotebook } from 'react-icons/tb';
import { FaHome, FaUser, FaBriefcase } from 'react-icons/fa';
import { PiUserSquareFill } from 'react-icons/pi';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { RiFileAddFill } from 'react-icons/ri';

const links = [
    { name: 'Acceuil', href: '/candidate.com', icon: FaHome },
    { name: 'Profile', href: '/recruteur', icon: PiUserSquareFill },
    { name: 'Offre', href: '/offre', icon: FaBriefcase },
    { name: 'Candidature', href: '/candidature', icon: RiFileAddFill },
  ];

export default function SideNavC({ isCollapsed, toggleSideNav }) {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-3 border-r-2 border-black/10">
      <div className={`mb-2 flex h-10 items-center ${isCollapsed ? 'justify-start' : 'justify-start md:justify-between'}  rounded-md p-4 md:h-10`}>
        <div className=" flex items-center">
          <div className={`flex items-center justify-center rounded-md bg-blue-500 text-white font-bold  ${isCollapsed ? 'h-6 w-6 text-lg' : 'text-xl h-6 w-6 md:h-8 md:w-8'} `}>
            T
          </div>
          {!isCollapsed && (
            <div className="hidden ml-2 text-sm font-bold text-black/90 md:text-lg md:block">
              AKALOU<sup className=" -top-2 text-[10px]  text-black/90 font-bold">TM</sup>
            </div>
          )}
        </div>
        {/* Icone pour réduire/étendre le SideNav */}
        <div className={` ${isCollapsed ? 'mx-0' : 'mx-0 md:mx-2'} `}>
          <TbNotebook 
            className='text-gray-500 cursor-pointer' 
            onClick={toggleSideNav} // Ajout de l'événement onClick pour déclencher la fonction
          />
        </div>
      </div>

      <div className="border-b border-gray-300 my-1"></div>


      <div className="flex flex-col justify-between space-y-2">
        <p className={`${isCollapsed ? 'text-[6px]' : 'text-[6px] md:text-[10px]'}  font-semibold my-2 h-1 p-2 px-3 text-black/40`} >MENU PRINCIPAL</p>
        {links.map((link) => (
          <NavLinks key={link.name} name={link.name} href={link.href} icon={link.icon} isCollapsed={isCollapsed} />
        ))}
      </div>

      {/* Ligne et bouton Sign Out en bas */}
      <div className="mt-auto"> {/* mt-auto pousse cet élément vers le bas */}
        <div className="border-b border-gray-300 my-1"></div>
        <form>
          <p className={`${isCollapsed ? 'text-[6px]' : 'text-[6px] md:text-[10px]'}  font-semibold my-2 h-1 p-2 px-3 text-black/40`} >DECONNEXION</p>
          <button className={`flex h-[48px] w-full items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-500 md:flex-none ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start'}   md:p-2 md:px-3`}>
            <FaPowerOff className='w-6 text-gray-500' />
            <div className={`${isCollapsed ? 'hidden' : 'hidden md:block'}  text-gray-500`}>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
