import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return (
      <div className="nav">
        <div className='navitem'>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className='navitem'>
          <NavLink to="/dialogs">Messeges</NavLink>
        </div>
        <div className='navitem'>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className='navitem'>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className='navitem'>
          <NavLink to="/settings">Settings</NavLink>          
        </div>
      </div>
    )
};

export default Navbar;