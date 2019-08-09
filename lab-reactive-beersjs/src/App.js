import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Home from './pages/Home'
import BeerDetail from './components/BeerDetail.js'
import Beers from './pages/Beers'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
}
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/beers`)
      .then(response => {
      this.setState({beers: response.data})
    })
}
  render() {
    return (
      <div>
        {/* <BeerDetail/> */}
        {/* <div>
          {this.state.beers.map(beer => <Link to={`/beers/${beer._id}`}>{beer.name}</Link>)}
        </div> */}
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' render={routeProps => (
            <Beers {...routeProps} listOfBeers={this.state.beers}/>
          )}/>
          <Route path='/beers/:beer_id' render={routeProps => (
            <BeerDetail {...routeProps} listOfBeers={this.state.beers}/>
          )}/>
        </div>
      </div>
    )
  }
}
