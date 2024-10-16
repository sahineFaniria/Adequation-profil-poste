import React, { useState, useEffect } from 'react';
import SideNav from '../../ui/Dashboard/SideNav/SideNav';
import Outils from '../../ui/Dashboard/outils';
import { Outlet, useLocation } from 'react-router-dom';

// Hook personnalisé pour détecter les points de rupture
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

export default function AdminDash() {
  // Gestion de l'état pour la taille du SideNav
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Hook pour vérifier si l'écran est en dessous de la taille "md"
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  // Fonction pour basculer la largeur du SideNav
  const toggleSideNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  const location = useLocation();

  // Fonction pour déterminer le titre en fonction de la navigation actuelle
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin.com':
        return 'Tableau de bord';
      case '/admin.com/recruteur':
        return 'Recruteur';
      case '/admin.com/candidate':
        return 'Candidate';
      case '/admin.com/offre':
        return 'Offre';
      case '/admin.com/cv':
        return 'CV';
      case '/admin.com/candidature':
        return 'Candidature';
      default:
        return 'Dashboard admin';
    }
  };

  return (
    <div className="bg-white flex h-screen overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 transition-all duration-300 bg-white z-10 
          ${isSmallScreen ? 'w-20' : isCollapsed ? 'w-20' : 'w-64'}`}
      >
        <SideNav isCollapsed={isSmallScreen ? true : isCollapsed} toggleSideNav={toggleSideNav} />
      </div>

      {/* Contenu principal */}
      <div
        className={`transition-all duration-300 w-auto grow flex flex-col`}
        style={{ marginLeft: isSmallScreen ? '5rem' : isCollapsed ? '5rem' : '16rem' }}
      >
        {/* Debut du header */}
        <div
          className={`fixed top-0 right-0 h-[68px] bg-white/5 backdrop-blur-[150px] z-10 border-b-2 border-black/10 flex items-center justify-between px-4 transition-all duration-300`}
          style={{ left: isSmallScreen ? '5rem' : isCollapsed ? '5rem' : '16rem' }} 
        >
          <div className="md:w-80">
            <p className="text-2xl font-semibold text-black/80">{getPageTitle()}</p>
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
  );
}
