## How to install

- `git clone git@github.com:leanjscom/contextAPI-exercise.git`
- `cd contextAPI-exercise`
- `Open the project in your favorite text editor`
- `npm i`
- `npm start`
- `Open the Browser with the url http://localhost:3000` and you will be ready to start
- It will be displaying an error to start with which you'll need to fix following the instructions below


## New context API exercise

- Have a look at AuthContext.js

We need to fix the error

Once you understand the code:

1. Declare a variable called AuthContext and set it to React.createContext() on line 3, then the app should render. eg:
```javascript
 const AuthContext = React.createContext()
 ```

2. export the AuthProvider and AuthConsumer on line 35

Export the AuthProvider component to define our state (whether the user is logged in) and pass its state to the value prop on the Provider.

- Have a look at AuthContext.js

Once you understand the code:

1. Declare a variable called AuthContext and set it to React.createContext() on line 3

2. export the AuthProvider and AuthConsumer on line 35

Export the AuthProvider component to define our state (whether the user is logged in) and pass its state to the value prop on the Provider.

- In App.js we need to wrap our Header inside the AuthProvider

- In Header.js use a render callback inside the AuthConsumer and conditionally display a login or logout button and link.

Remember Context Consumers must have a function as their direct child. This will be passed the value from our Provider.

- If you are stuck you can paste in the code below and then finish it off following the comments:

```javascript
{
  ({ isAuth }) => (
      <React.Fragment>
        <h3>
         <Link to="/">
           HOME
         </Link>
        </h3>

        {/* Modify the code here to conditionally render the link and logout button or just the login button */}
           <ul>
             <Link to="/dashboard">
               Dashboard
             </Link>
             <button onClick={logout}>
               logout
             </button>
           </ul>

           <button onClick={login}>login</button>

      </React.Fragment>
    )
}
```

- Now inside Header.js finish off the code and import our AuthConsumer. Use the value of isAuth to conditionally render the link to /dashboard

- Because isAuth is set to false, only the login button will be visible. Try changing the value to true in the state (it’ll switch to the logout button).

- In AuthContext, uncomment and add the methods login and logout in addition to isAuth in the AuthContext.Provider

- Lets create a ProtectedRoute component:  

Make Landing and Dashboard components. Our dashboard will only be visible when the user is logged in. Just make something simple for both, such as:

```javascript
import React from 'react'
const Dashboard = () => <h2>User Dashboard</h2>
export default Dashboard
```

- Go to ProtectedRoute.js and implement the missing code

- In App.js add your ProtectedRoute and use it on line 18, you'll need to also add a Switch for react router if you haven't already done so, if you'd like a hint, you can have a look at the branch "sol-final2"
