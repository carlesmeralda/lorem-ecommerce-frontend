// const storeCart = cart => {
//   const storedCart = cart.length > 0 ? cart : []
//   localStorage.setItem('cart', JSON.stringify(storedCart))
// }

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      if (!state.cart.find(item => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        })
      }
      return {
        ...state,
        cart: [...state.cart],
      }
    case 'DELETE_CART':
      const deleteCart = state.cart.filter(
        item => item.id !== action.payload.id
      )
      return {
        ...state,
        cart: deleteCart,
      }
    case 'ADD_WISH':
      if (!state.wishlist.find(item => item.id === action.payload.id)) {
        state.wishlist.push({
          ...action.payload,
        })
      }
      return {
        ...state,
        wishlist: [...state.wishlist],
      }
    case 'DELETE_WISH':
      const deleteWish = state.wishlist.filter(
        item => item.id !== action.payload.id
      )
      return {
        ...state,
        wishlist: deleteWish,
      }
    case 'INCREASE':
      const incIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      )
      if (state.cart[incIndex].quantity < state.cart[incIndex].stocks) {
        state.cart[incIndex].quantity++
      }
      return {
        ...state,
        cart: [...state.cart],
      }
    case 'DECREASE':
      const decIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      )
      if (state.cart[decIndex].quantity > 1) {
        state.cart[decIndex].quantity--
      }
      return {
        ...state,
        cart: [...state.cart],
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }
    case 'CLEAR_WISH':
      return {
        ...state,
        wishlist: [],
      }
    default:
      return state
  }
}

export default shopReducer
