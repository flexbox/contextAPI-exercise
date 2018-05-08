import React, { Component } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <Router>
    <div className="App">
    {/* Wrap header in the AuthProvider */}
        <Header />
    </div>
  </Router>
)

export default App
