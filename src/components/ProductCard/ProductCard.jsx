import React from 'react'

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
} from './ProductCard.styled'

function ProductCard({ product }) {
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
        <AddCart>Add to Cart</AddCart>
        <AddWish primary>Add to WishList</AddWish>
      </CardContent>
    </CardDiv>
  )
}

export default ProductCard
