import React from 'react'
import beer from '../img/beers.png'
import randomBeer from '../img/random-beer.png'
import newBeer from '../img/new-beer.png'
import {Link} from 'react-router-dom'



export default function Home(props) {
  return (
    <div>
      <div>
        <Link key={beer._id} to={`/beers/`}>
          <img src={beer} alt="" />
          <h1>All Beers</h1>
        </Link>
      </div>
      <div>
        <Link to={`/beers/random`}>
          <img src={randomBeer} alt="" />
          {/* <button onClick={props.handleClick}>*/}<h1>Random Beers</h1>
        </Link>
      </div>
      <div>
        <Link to={`/new-beer/`}>
          <img src={newBeer} alt="" />
          <h1>New Beer</h1>
        </Link>
      </div>
    </div>
  )
}
