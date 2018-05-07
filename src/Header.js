import React from 'react'
import { AuthConsumer } from './AuthContext'
import { Link } from 'react-router-dom'
import logo from './logo.svg'


export default () => (
  <header>
    <AuthConsumer>
      {
        ({ isAuth }) => (
          <React.Fragment>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </React.Fragment>
        )
      }
    </AuthConsumer>
  </header>
)
