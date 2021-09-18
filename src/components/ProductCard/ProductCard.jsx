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
  return (
    <CardDiv>
      <CardLink>
        <CardImage src={product.image} alt={product.name} />
      </CardLink>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardPrice>{product.price}</CardPrice>
        <CardDescription>{product.description}</CardDescription>
        <AddCart>Add to Cart</AddCart>
        <AddWish primary>Add to WishList</AddWish>
      </CardContent>
    </CardDiv>
  )
}

export default ProductCard
