export const isInCart = (product, cart) => {
  return cart.find(item => item.id === product.id)
}

export const isInWish = (product, wishlist) => {
  return wishlist.find(item => item.id === product.id)
}
