import { createContext, useReducer } from 'react'
import shopReducer from './shopReducer'

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

// change empty array state when backend is setup
const shopInitState = { cart: [], wishlist: [] }

const ShopContextProvider = ({ children }) => {
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
