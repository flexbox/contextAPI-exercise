import React, { Component } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
// import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <Router>
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          {/* Add your ProtectedRoute for Dashboard instead of the line below! */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </AuthProvider>
    </div>
  </Router>
)

export default App
