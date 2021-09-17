import { Route, Switch } from 'react-router-dom'

import Login from './components/AuthForm/Login'
import Signup from './components/AuthForm/Signup'

import GlobalStyles from './globalStyles'
import Navbar from './layouts/Navigation/Navbar/Navbar'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  )
}

export default App
