import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth.js'
import './Signup.css'
import cors from 'cors'
const auth = new Auth();




export default class Signup extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = { username: '', password: '', firstname: '', lastname: '', email: '' }
  }
  // this.handleChange = this.handleChange.bind(this)
  // this.handleFormSubmit = this.handleFormSubmit.bind(this)

    handleFormSubmit = (e) => {
      e.preventDefault();
      auth.signup(this.state)
        .then(() => {
          this.setState({ error: "" });
          this.props.history.push("/");
        })
        .catch(({ response }) => {
          this.setState({ error: response.data.message });
        })
    }
    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({
          [e.target.name]: e.target.value
        })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit} >{/* we don't want the default form submitting behaviour, so we're adding own submit handler   */}
            <div>
                <label >Username:</label>
                <input className='auth-input' type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} /> {/* reacts wants to be in charge of all the data   */}
              </div>

              <div >
                <label >Password:</label>
                <input className='auth-input' type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />{/* reacts wants to be in charge of all the data   */}
              </div>

              <div >
                <label>First Name:</label>
                <input className='auth-input' type="text" name="firstname" placeholder="first name" checked={this.state.firstname} onChange={this.handleChange} />{/* reacts wants to be in charge of all the data   */}
              </div>
              <div>
                <label>Last Name:</label>
                <input className='auth-input' type="text" name="lastname" placeholder="last name" checked={this.state.lastname} onChange={this.handleChange} />{/* reacts wants to be in charge of all the data   */}
              </div>
              <div>
                <label>Email:</label>
              <input className='auth-input' type="email" name="email" placeholder="email address" checked={this.state.email} onChange={this.handleChange} />{/* reacts wants to be in charge of all the data   */}
              </div>
              <div style={{paddingTop:'10%'}}>
                <input className='auth-input' style={{margin:'0 auto', backgroundColor:'lightBlue', color:'grey'}} type="submit" value="Signup" />
              </div>
              <div style={{display: 'flex', margin:'0 auto'}}>
            <p>Already have account?
            <Link to={'/auth/login'} style={{color: 'grey'}}>Login</Link>
            </p>
            </div>
            </form>
            
          </div>
        )
      }
}
