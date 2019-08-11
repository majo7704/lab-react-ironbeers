import React, { Component } from 'react'
import axios from 'axios'


export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      random: null,
      clicked: false
    }
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/beers/random`)
      .then(response => {
        this.setState({ random: response.data.name })
      })
      .catch(err => console.log(err))
  }

  handleClick = () => {
    const randomBeer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)]
    this.setState({
      clicked: true,
      random: randomBeer
    })
  }
  render() {
    const { random } = this.state
    return (
  
      <div>
        {/* <button value="CLick me!" onClick={this.handleClick}>Random Beer</button> */}
        <h1>{random}</h1>
        
      </div>
      
  
    )
  }
}
