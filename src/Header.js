import React from 'react'
import { AuthConsumer } from './AuthContext'
import { Link } from 'react-router-dom'
import logo from './logo.svg'


const Header = (props) => (
  <header>
    <AuthConsumer>
      {
        ({ isAuth }) => (
            <React.Fragment>
              <h3>
               <Link to="/">
                 HOME
               </Link>
              </h3>

              {/* Modify the code here to conditionally render the link and logout button or just the login button */}
                 <ul>
                   <Link to="/dashboard">
                     Dashboard
                   </Link>
                   <button onClick={logout}>
                     logout
                   </button>
                 </ul>

                 <button onClick={login}>login</button>

            </React.Fragment>
          )
      }
    </AuthConsumer>
  </header>
)

export default Header
