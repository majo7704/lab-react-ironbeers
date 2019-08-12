import React, { Component } from 'react'
import Auth from '../utils/Auth';
import auth = new Auth();

export default class Logout extends Component {
  state = {
    error: null
  }
  componentDidMount() {
    auth.logout()
      .then(() => {
      this.props.history.push('/') //redirect client
      })
      .catch((err) => {
      this.setState({error: error.message})
    })
  }
  render() {
    return (
      <div>
        {this.state.error ?
          <h1>{this.state.error}</h1>
          :
          <img src={}/>
        }
      </div>
    )
  }
}
