import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/AuthForm/Login'
import Signup from './components/AuthForm/Signup'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'
import GlobalStyles from './globalStyles'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound/NotFound'

const Cart = React.lazy(() => import('./pages/Cart/Cart'))
const WishList = React.lazy(() => import('./pages/WishList/WishList'))
const Shop = React.lazy(() => import('./pages/Shop/Shop'))
const ProductItem = React.lazy(() => import('./pages/ProductItem/ProductItem'))
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'))
const Success = React.lazy(() => import('./pages/Checkout/Success'))

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      >
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
          <Route path="/shop/success">
            <Success />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
