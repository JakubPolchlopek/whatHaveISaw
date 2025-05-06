import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
      <p>Where have I been</p>
      <nav>
        <NavLink
          to='/'
          className='nav-link'
        >
          Home
        </NavLink>
        <NavLink
          to='/my-places'
          className='nav-link'
        >
          My Places
        </NavLink>
        <NavLink
          to='/add-place'
          className='nav-link'
        >
          Add Place
        </NavLink>
      </nav>
    </header>
  )
}
