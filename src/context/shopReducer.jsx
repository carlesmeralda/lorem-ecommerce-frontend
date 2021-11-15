const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      if (!state.cart.find(item => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        })
      }
      return {
        ...state,
        cart: [...state.cart],
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
    default:
      return state
  }
}

export default shopReducer
