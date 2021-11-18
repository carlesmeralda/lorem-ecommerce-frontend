import { Route, Switch } from 'react-router-dom'

import Login from './components/AuthForm/Login'
import Signup from './components/AuthForm/Signup'
import ScrollToTop from './components/ScrollToTop'

import GlobalStyles from './globalStyles'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Homepage from './pages/Homepage'
import ProductItem from './pages/ProductItem/ProductItem'
import Shop from './pages/Shop/Shop'
import WishList from './pages/WishList/WishList'

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/shop/products" exact>
          <Shop />
        </Route>
        <Route path="/shop/products/:productId">
          <ProductItem />
        </Route>
        <Route path="/shop/cart">
          <Cart />
        </Route>
        <Route path="/shop/wishlist">
          <WishList />
        </Route>
        <Route path="/shop/checkout">
          <Checkout />
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
