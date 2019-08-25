import React, { Component } from 'react'
import "./Nav.css"
import Home from '../img/icons8-home-30.png'
import { Link } from 'react-router-dom'
import Signup from '../img/signup-icon.png'
import { withRouter } from 'react-router'
import Auth from '../utils/Auth'
const auth = new Auth();


class Nav extends Component {
  state = {
    user: null
  }
  handleLogout = (e) => {
    e.preventDefault();
    var fixProps = this.props;
    auth.logout()
      
      .then(() => {
        this.setState({ user: null }, () => {
          fixProps.history.push('/');
      })
      })
      .catch((error) => {
      this.setState({error:error.message})
    })
  }

  render() {
    const user = auth.getUser();
    
    return (
      <header>
      <nav>
        <Link to={`/`}><img src={Home} alt="" /></Link>
        <Link className="signup" to={`/auth/signup`}><img src={Signup} alt="" /></Link>
        {/* <Link to={`/profile`}>Profile</Link> */}
        {
          user ?
            <>
              <Link to="/profile">Profile</Link>
              <p>Welcome {user.username}</p>
              <a href="#" onClick={this.handleLogout}>Logout</a>
            </>
            :
            <Link className="signup" to='/auth/signup'><img src={Signup} alt="" /></Link>
        }
        </nav>
      </header>
    )
  }
}
export default withRouter(Nav);
// export default function Nav() {
//   return (
//     <header>
//       <nav>
//         <div></div>
//         <div></div>
//         <div>
//           <Link to={`/`}><img src={Home} alt="" /></Link>
//           <Link className="signup" to={`/auth/signup`}><img src={Signup} alt=""/></Link>
//         </div>
//       </nav>
//     </header>
//   )
// }
