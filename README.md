New context API exercise

- Lets create a ProtectedRoute component:  

Make Landing and Dashboard components. Our dashboard will only be visible when the user is logged in. Just make something simple for both, such as:

```javascript
import React from 'react'
const Dashboard = () => <h2>User Dashboard</h2>
export default Dashboard
```


- Go to ProtectedRoute and implement the missing code
- In App.js add your ProtectedRoute and use it on line 18
