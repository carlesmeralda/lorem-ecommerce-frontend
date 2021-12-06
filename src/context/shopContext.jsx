import { createContext, useReducer, useState, useEffect } from 'react'
// import { useAxios } from '../hooks/useAxios'
import shopReducer from './shopReducer'

const cartFromStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const wishFromStorage = localStorage.getItem('wishList')
  ? JSON.parse(localStorage.getItem('wishList'))
  : []

export const ShopContext = createContext({
  cart: [],
  wishlist: [],
  addToCart: product => {},
  deleteCart: product => {},
  addToWish: product => {},
  deleteWish: product => {},
  increase: product => {},
  decrease: product => {},
  clearCart: () => {},
  clearWish: () => {},
})

const ShopContextProvider = ({ children }) => {
  //////////  TODO: set initial state only after done fetching  ///////

  // const [cartState, setCartState] = useState([])
  // const [wishState, setWishState] = useState([])

  // const {
  //   data: cartData,
  //   isLoading: cartIsLoading,
  //   error: cartError,
  // } = useAxios({
  //   url: '/shop/cart/',
  // })

  // const {
  //   data: wishData,
  //   isLoading: wishIsLoading,
  //   error: wishError,
  // } = useAxios({
  //   url: '/shop/wishlist/',
  // })

  // useEffect(() => {
  //   if (cartData !== null) {
  //     setCartState(cartData.cart)
  //   }
  // }, [cartData])

  // useEffect(() => {
  //   if (wishData !== null) {
  //     setWishState(wishData.wishList)
  //   }
  // }, [wishData])

  // const shopInitState = { cart: cartState, wishlist: wishState }
  const shopInitState = { cart: cartFromStorage, wishlist: wishFromStorage }

  const [state, dispatch] = useReducer(shopReducer, shopInitState)

  const addToCart = product => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    })
  }

  const deleteCart = product => {
    dispatch({
      type: 'DELETE_CART',
      payload: product,
    })
  }

  const addToWish = product => {
    dispatch({
      type: 'ADD_WISH',
      payload: product,
    })
  }

  const deleteWish = product => {
    dispatch({
      type: 'DELETE_WISH',
      payload: product,
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const clearWish = () => {
    dispatch({
      type: 'CLEAR_WISH',
    })
  }

  const increase = product => {
    dispatch({
      type: 'INCREASE',
      payload: product,
    })
  }

  const decrease = product => {
    dispatch({
      type: 'DECREASE',
      payload: product,
    })
  }

  return (
    <ShopContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        addToCart,
        deleteCart,
        addToWish,
        deleteWish,
        clearCart,
        clearWish,
        increase,
        decrease,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
