import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout'
import Auth from '../utils/Auth'
const auth = new Auth();



export default class Profile extends Component {
  render() {
    var user = auth.getUser();
    return (
      <MainLayout>
        <h1>Welcome {user.username}</h1>
      </MainLayout>
    )
  }
}

