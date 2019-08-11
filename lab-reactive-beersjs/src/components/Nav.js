import React from 'react'
import "./Nav.css"
import Home from '../img/icons8-home-30.png'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <div></div>
        <div></div>
        <div>
          <Link to={`/`}><img src={Home} alt=""/></Link>
        </div>
      </nav>
    </header>
  )
}
