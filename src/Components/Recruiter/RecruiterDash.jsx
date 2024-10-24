import React, { useState, useEffect } from 'react';
import Search from '../../ui/Dashboard/Search';
import Outils from '../../ui/Dashboard/outils';
import SideNavR from '../../ui/Dashboard/SideNav/SideNavR';
import { Outlet } from 'react-router-dom';


function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
  
      const handler = (event) => setMatches(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);
  
    return matches;
  }


export default function RecruiterDash() {
     // Gestion de l'état pour la taille du SideNav
     const [isCollapsed, setIsCollapsed] = useState(false);

     // Hook pour vérifier si l'écran est en dessous de la taille "md"
     const isSmallScreen = useMediaQuery('(max-width: 768px)');
 
     // Fonction pour basculer la largeur du SideNav
     const toggleSideNav = () => {
         setIsCollapsed(!isCollapsed);
     };

  return (
    <div className="bg-white flex h-screen overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 transition-all duration-300 bg-white z-10 
          ${isSmallScreen ? 'w-20' : isCollapsed ? 'w-20' : 'w-64'}`} // Si petit écran, toujours réduit
      >
        <SideNavR isCollapsed={isSmallScreen ? true : isCollapsed} toggleSideNav={toggleSideNav} />
      </div>

      {/* Contenu principal */}
      <div
        className={`transition-all duration-300 w-auto grow flex flex-col`}
        style={{ marginLeft: isSmallScreen ? '5rem' : isCollapsed ? '5rem' : '16rem' }} // Responsive margin left
      >
        {/* Debut du header */}
        <div
          className={`fixed top-0 right-0 h-[68px] bg-white backdrop-blur-[150px] z-10 border-b-2 border-black/10 flex items-center justify-between px-4 transition-all duration-300`}
          style={{ left: isSmallScreen ? '5rem' : isCollapsed ? '5rem' : '16rem' }} // Responsive left
        >
          <div className="md:w-80 text-lg font-semibold text-black/80">
            Recruteur
          </div>
          <Outils />
        </div>
        {/* Fin du header */}

        {/* Contenu défilable sous le header */}
        <div className="mt-[68px] h-[calc(100vh-68px)] overflow-y-auto">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
