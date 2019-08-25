import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth.js'
import './Login.css'
import cors from 'cors'
const auth = new Auth();

export default class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = { username: '', password: '' }
  }
  // this.handleChange = this.handleChange.bind(this)
  // this.handleFormSubmit = this.handleFormSubmit.bind(this)

  handleFormSubmit = (e) => {
    e.preventDefault();
    auth.login(this.state.username, this.state.password)
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
      
        <form onSubmit={this.handleFormSubmit}>{/* we don't want the default form submitting behaviour, so we're adding own submit handler   */}
          <div>
            <label>Username:</label>
            <input className='auth-input' type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} /> {/* reacts wants to be in charge of all the data   */}
          </div>

          <div>
            <label>Password:</label>
            <input className='auth-input' type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />{/* reacts wants to be in charge of all the data   */}
          </div>
          <div style={{paddingTop:'10%'}}>
            <input className='auth-input' style={{margin:'0 auto', backgroundColor:'lightBlue', color:'grey'}}  className='auth-input' type="submit" value="Login" />
          </div>
          <div style={{display: 'flex', margin:'0 auto'}}>
          <p>Don't have account?
            <Link to={'/auth/signup'} style={{color: 'grey'}}>Signup</Link>
        </p>
        </div>
        </form>
        
     
    )
  }
}

