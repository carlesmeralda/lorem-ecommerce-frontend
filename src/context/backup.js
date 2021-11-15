import { createContext, useReducer, useState } from 'react'
// import shopReducer from './shopReducer'

export const ShopContext = createContext({
  cart: [],
  wishlist: [],
  addCart: product => {},
  deleteCart: productID => {},
  addWish: product => {},
  deleteWish: productID => {},
  clearCart: () => {},
})

// const cartInitState = { cart: [] }
// const wishInitState = { wishlist: [] }

// const [cartState, cartDispatch] = useReducer(shopReducer, cartInitState)
// const [wishState, wishDispatch] = useReducer(shopReducer, wishInitState)

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addCart = product => {
    if (cart.find(item => item.id !== product.id)) {
      setCart(prev => [...prev, product])
    }
  }

  const deleteCart = productId => {
    console.log('test')
  }

  const addWish = product => {
    if (wishlist.find(item => item.id !== product.id)) {
      setWishlist(prev => [...prev, product])
    }
  }

  const deleteWish = productId => {
    console.log('test')
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addCart,
        deleteCart,
        addWish,
        deleteWish,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
