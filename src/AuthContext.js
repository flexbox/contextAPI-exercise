import React from 'react'

const AuthContext = React.createContext()


class AuthProvider extends React.Component {
  constructor() {
    super()
    this.state = { isAuth: false }
  }
  render() {
    // Inside the return, declare the <AuthContext.Provider /> and it isAuth in an object with the current state
    return (
      <AuthContext.Provider
        value={{ isAuth: this.state.isAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
