import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="zoyya logo" className="logo"></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Početna
            </Link>
          </li>
          <li>
            <Link to="/about">
              Dokumentacija
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
