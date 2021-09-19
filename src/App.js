import { Route, Switch } from 'react-router-dom'

import Login from './components/AuthForm/Login'
import Signup from './components/AuthForm/Signup'
import ScrollToTop from './components/ScrollToTop'

import GlobalStyles from './globalStyles'
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
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
