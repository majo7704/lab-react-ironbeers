

import axios from 'axios'
import cors from 'cors'

import React, { Component } from 'react'

export default class BeerDetail extends Component {
  state = {
    activeBeer: [],

  }
  componentDidMount = () => {
    const name = this.props.beerItem.name;
    axios.get(`${process.env.REACT_APP_API}/beers/${name}`)
      .then(response => {
        this.setState({ activeBeer: response.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    const beer = this.state.activeBeer
    return (
      <div>
        <div>
          <img src={beer.image_url} alt=""/>
        </div>
      </div>
    )
  }
}


    
    // const { params } = props.beerItem.match;
    // const { beerId } = params
  
    // let foundBeer = props.beerItem.find((beer) => (
    //   beer._id === beerId
    // ))
    // return (
    //     <div className="container-fluid" style={{ width: "100 vw" }}>
    //       <img style={{ width: "10%" }} src={foundBeer.image_url} className="card-img-top" alt={foundBeer.name} />
    //       <div className="row">
    //         <h5 className="col">{foundBeer.name}</h5>
    //         <p className="col"><small className="text-muted">{foundBeer.attenuation_level}</small></p>
    //       </div>
    //       <div className="row">
    //         <p className="col"><small className="text-muted">{foundBeer.tagline}</small></p>
    //         <p className="col"><small className="text-muted">{foundBeer.first_brewed}</small></p>
    //       </div>
    //       <p className="col">{foundBeer.description}</p>
    //       <p className="col"><small className="text-muted">Created by: {foundBeer.contributed_by}</small></p>
    //     </div>
    
    // )
  
