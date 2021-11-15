import { createContext, useReducer } from 'react'
import shopReducer from './shopReducer'

export const ShopContext = createContext({
  cart: [],
  wishlist: [],
  addToCart: product => {},
  deleteCart: productID => {},
  addToWish: product => {},
  deleteWish: productID => {},
  clearCart: () => {},
})

const shopInitState = { cart: [], wishlist: [] }

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, shopInitState)

  const addToCart = product => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    })
  }

  const deleteCart = productId => {
    dispatch({
      type: 'DELETE_CART',
      payload: productId,
    })
  }

  const addToWish = product => {
    dispatch({
      type: 'ADD_WISH',
      payload: product,
    })
  }

  const deleteWish = productId => {
    dispatch({
      type: 'DELETE_WISH',
      payload: productId,
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  return (
    <ShopContext.Provider
      value={{
        //...state
        cart: state.cart,
        wishlist: state.wishlist,
        addToCart,
        deleteCart,
        addToWish,
        deleteWish,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
