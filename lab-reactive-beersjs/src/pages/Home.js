import React from 'react'
import beer from '../img/beers.png'
import randomBeer from '../img/random-beer.png'
import newBeer from '../img/new-beer.png'
import {Link} from 'react-router-dom'
import beerDetail from '../components/BeerDetail'
import Beers from './Beers.js'


export default function Home() {
  return (
    <div>
      <div>
        <Link to={`/beers/${Beers}`}>
          <img src={beer} alt="" />
          <h1>All Beers</h1>
        </Link>
      </div>
      <div>
        <Link to={`/beers/random/${beer._id}`}>
          <img src={randomBeer} alt="" />
          <h1>Random Beers</h1>
        </Link>
      </div>
      <div>
        <Link to={`/new/`}>
          <img src={newBeer} alt="" />
          <h1>New Beer</h1>
        </Link>
      </div>
    </div>
  )
}
