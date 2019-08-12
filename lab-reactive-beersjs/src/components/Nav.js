import React from 'react'
import "./Nav.css"
import Home from '../img/icons8-home-30.png'
import { Link } from 'react-router-dom'
import Signup from '../img/signup-icon.png'

export default function Nav() {
  return (
    <header>
      <nav>
        <div></div>
        <div></div>
        <div>
          <Link to={`/`}><img src={Home} alt="" /></Link>
          <Link className="signup" to={`/auth/signup`}><img src={Signup} alt=""/></Link>
        </div>
      </nav>
    </header>
  )
}
