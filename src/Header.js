import React from 'react'
import { AuthConsumer } from './AuthContext'
import { Link } from 'react-router-dom'
import logo from './logo.svg'


const Header = (props) => (
  <header>
    <AuthConsumer>
      {
        ({ isAuth }) =>  (
            <React.Fragment>
              <h3>
               <Link to="/">
                 HOME
               </Link>
              </h3>
              {isAuth ? (
                 <ul>
                   <Link to="/dashboard">
                     Dashboard
                   </Link>
                   <button>
                     logout
                   </button>
                 </ul>
               ) : (
                 <button>login</button>
              )}
            </React.Fragment>
          )
      }
    </AuthConsumer>
  </header>
)

export default Header
