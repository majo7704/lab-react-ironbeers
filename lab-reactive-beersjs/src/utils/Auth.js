import axios from 'axios'
import qs from "query-string"
import React, { Component } from 'react'

export default class Auth extends Component {
  constructor(domain, props) {
    super(props);
    this.domain = domain || process.env.REACT_APP_API;
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  login(username, password) {
    return axios({
      method:"POST",
      url: "/auth/login",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ username, password }),
    })
    .then((response) => {
      this.setUser(response.data)
    })
    .catch(err => console.log('err' + err))
  }
  signup({ username, password, firstname, lastname, email }) {
    return axios({
      method: 'POST',
      url: '/auth/signup',
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ username, password, firstname, lastname, email })
    })
    .then((response) => {
      this.setUser(response.data)
    })
    .catch(err => console.log('err' + err))
  }
  loggedIn() {
    const user = this.getUser()
    return !!user;
  }
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() {
    let deleteLater = JSON.parse(localStorage.getItem('user'))
    
    return JSON.parse(localStorage.getItem('user'));
  }
  logout() {
    return axios({
      baseURL: this.domain,
      url: '/auth/logout'
    })
      .then((res) => {
        localStorage.removeItem('user')
      })
  }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

