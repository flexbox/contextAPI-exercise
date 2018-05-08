import React from 'react'

//Decalre AuthContext here
// const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  constructor() {
    super()
    this.state = { isAuth: false }
  }

  // login = () => {
  //   this.setState({ isAuth: true })
  // }
  // logout = () => {
  //   this.setState({ isAuth: false })
  // }

  render() {
    // Inside the return we have declared the <AuthContext.Provider /> and isAuth in an object with the current state
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
// export both AuthProvider and AuthConsumer so they can be imported like this: import { AuthProvider } from './AuthContext'
