import React, { Component } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <Router>
    <div className="App">
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  </Router>
)

export default App
