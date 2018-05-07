import React, { Component } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <Router>
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </AuthProvider>
    </div>
  </Router>
)

export default App
