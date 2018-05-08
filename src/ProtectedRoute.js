import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={
          props => (
            isAuth
            // Add a ternary operator here to direct the user to the dashboard or redirect to "/" depending on the value of isAuth
          )
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute
