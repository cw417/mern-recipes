import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='bg-blue-400'>
      <nav className='flex flex-row'>
        <NavLink className='nav-link' to='/'>
          <div>Home</div>
        </NavLink>
        <NavLink className='nav-link' to='/create'>
          <div>Edit</div>
        </NavLink>
      </nav>
    </div>
  )
}
