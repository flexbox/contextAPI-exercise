import React, { Component } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Header />
        </AuthProvider>
      </div>
    )
  }
}

export default App
