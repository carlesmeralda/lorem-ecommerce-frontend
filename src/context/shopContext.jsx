import { createContext } from 'react'

export const ShopContext = createContext({
  cart: [],
  wishlist: [],
})

const ShopContextProvider = ({ children }) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>
}

export default ShopContextProvider
