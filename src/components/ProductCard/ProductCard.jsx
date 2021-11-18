import React, { useContext } from 'react'
import { isInCart, isInWish } from '../../../src/helpers'
import { ShopContext } from '../../context/shopContext'

import {
  CardDiv,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  CardDescription,
  AddCart,
  AddWish,
  CardLink,
  InCart,
  InWish,
} from './ProductCard.styled'

function ProductCard({ product }) {
  const { cart, wishlist, addToCart, addToWish } = useContext(ShopContext)

  let newDesc
  if (product.description.length > 30) {
    newDesc = product.description.slice(0, 31) + '...'
  } else {
    newDesc = product.description
  }

  return (
    <CardDiv>
      <CardLink to={`/shop/products/${product.id}`}>
        <CardImage src={product.image} alt={product.name} />
      </CardLink>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardPrice>{product.price}</CardPrice>
        <CardDescription>{newDesc}</CardDescription>

        {isInCart(product, cart) ? (
          <InCart>Item in Cart</InCart>
        ) : (
          <AddCart onClick={() => addToCart(product)}>Add to Cart</AddCart>
        )}

        {isInWish(product, wishlist) ? (
          <InWish>Wished!!</InWish>
        ) : (
          <AddWish primary onClick={() => addToWish(product)}>
            Add to WishList
          </AddWish>
        )}
      </CardContent>
    </CardDiv>
  )
}

export default ProductCard
