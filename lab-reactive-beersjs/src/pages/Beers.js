import React from 'react'
import { Link } from 'react-router-dom'
import './Beers.css'

export default function Beers(props) {//react fragment insted of additional div
  return (<>
    {props.listOfBeers.map((beer) => {
      return (
        <Link to={{
          pathname: `/beers/${beer._id}`,
          state: {beer: beer.name}}
        }> 
          <li className="beerSingle" key={beer._id}>
            {<img src={beer.image_url} alt="" />}
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>Created by: {beer.contributed_by}</p>
          </li>
        </Link>
      )
    })
    }
  </>)
} 
  


