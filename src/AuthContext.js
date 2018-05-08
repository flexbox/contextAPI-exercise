import React from 'react'

const AuthContext = React.createContext()


class AuthProvider extends React.Component {
  constructor() {
    super()
    this.state = { isAuth: false }
  }

  login = () => {
    this.setState({ isAuth: true })
  }
  logout = () => {
    this.setState({ isAuth: false })
  }

  render() {
    // Inside the return, declare the <AuthContext.Provider /> and it isAuth in an object with the current state
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth
          // Add login and logout here
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
