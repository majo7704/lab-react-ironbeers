import cors from 'cors'
import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Home from './pages/Home'
import BeerDetail from './components/BeerDetail.js'
import Nav from './components/Nav'
import RandomBeer from './pages/RandomBeer.js'
import Beers from './pages/Beers'
import NewBeer from './pages/NewBeer';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      random: ''
    }
}
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/beers/`)
      .then(response => {
      this.setState({beers: response.data})
      })
      .catch(err => console.log(err))  
  }
  
  render() {
    return (
      <div>
        
        <div>
          <Switch>
            <Route exact path='/auth/signup' component={Signup} />
            <Route exact path='/auth/login' component={Login}/>
            <Route exact path='/' component={Home} />
            <Route path='/new-beer' component={NewBeer}/>
            <Route exact path='/beers' render={routeProps => (
              <Beers {...routeProps} listOfBeers={this.state.beers}/>
            )} />
            <Route path='/beers/random' component={RandomBeer} />
            <Route path='/beers/:beerId' render={routeProps => (
              <BeerDetail {...routeProps} beerItem={this.state.beers} />
            )} />
            <ProtectedRoute redirectUrl='/auth/signup' path="/profile" component={Profile} />
            
          </Switch>
        </div>
      </div>
    )
  }
}
