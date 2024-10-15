import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ icon: Icon, name, href, isCollapsed  }) {
  return (
    <NavLink
      to={href}
      end
      className={({ isActive }) =>
        `flex h-[48px] grow items-center ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start'} gap-2 rounded-md p-3 text-sm font-medium flex-none px-3 
        ${isActive ? 'border border-blue-200 bg-blue-100 text-blue-500' : 'text-gray-500 hover:border-blue-200 hover:bg-blue-100 hover:text-blue-500'}`
      }
    >
      <Icon className="w-6" />
      {!isCollapsed && <p className="hidden md:block">{name}</p>}
    </NavLink>
  );
}

