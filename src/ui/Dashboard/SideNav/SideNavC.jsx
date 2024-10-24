import React from 'react';
import NavLinks from '../NavLinks';
import { FaPowerOff } from 'react-icons/fa';
import { TbNotebook } from 'react-icons/tb';
import { FaHome, FaBriefcase } from 'react-icons/fa';
import { PiUserSquareFill } from 'react-icons/pi';
import { RiFileAddFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const links = [
    { name: 'Acceuil', href: '/candidate.com', icon: FaHome },
    { name: 'Mon profile', href: '/candidate.com/profile', icon: PiUserSquareFill },
    // { name: 'Offre', href: '/candidate.com/offre', icon: FaBriefcase },
    { name: 'Ma candidature', href: '/candidate.com/demande', icon: RiFileAddFill },
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


      <div className="flex flex-col justify-between">
        {/* Lien Postuler avec un fond gris distinct et une icône avec un fond blanc */}
        <NavLink
          to="/candidate.com/cv"
          className={({ isActive }) => `  
          flex h-[48px] w-[80%] grow items-center mt-2 hover:border hover:border-gray-300 
           ${isActive ? 'border border-gray-300 bg-gray-200 text-black-700' : 'text-gray-700 hover:bg-gray-100 '}
          ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start '} gap-2 rounded-md p-3 text-sm font-medium flex-none px-3  hover:bg-gray-200 `}
        >
          {/* Icône avec un fond blanc */}
          <div className="bg-white shadow-inner shadow-gray-200 rounded-lg p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          {!isCollapsed && <p className="hidden md:block">Soumettre un CV</p>}
        </NavLink>

        {/* Texte Menu Principal */}
        <p className={`${isCollapsed ? 'text-[6px]' : 'text-[6px] md:text-[10px]'} font-semibold my-4 h-1 p-2 px-3 text-black/40`}>MENU PRINCIPAL</p>

        {/* Liens de navigation */}
        <div className=" space-y-2">
        {links.map((link) => (
          <NavLinks key={link.name} name={link.name} href={link.href} icon={link.icon} isCollapsed={isCollapsed} />
        ))}
        </div>
      </div>


      {/* Ligne et bouton Sign Out en bas */}
      <div className="mt-auto"> {/* mt-auto pousse cet élément vers le bas */}
        <div className="border-b border-gray-300 my-1"></div>
        <form>
          <p className={`${isCollapsed ? 'text-[6px]' : 'text-[6px] md:text-[10px]'}  font-semibold my-2 h-1 p-2 px-3 text-black/40`} >DECONNEXION</p>
          <Link to="/" className={`flex h-[48px] w-full items-center gap-2 rounded-md text-gray-500 bg-gray-50 p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-500 md:flex-none ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start'}   md:p-2 md:px-3`}>
            <FaPowerOff className='w-6' />
            <div className={`${isCollapsed ? 'hidden' : 'hidden md:block'}  `}>Sign Out</div>
          </Link>
        </form>
      </div>
    </div>
  )
}
