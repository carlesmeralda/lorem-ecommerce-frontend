import React from 'react'
import { Container } from '../../components/Container'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import {
  CartBox,
  CartContent,
  CartItems,
  CartMain,
  CartProduct,
  CartProductImage,
  CartProductInfo,
  CartProductInfoDiv,
  CartProductInfoName,
  CartProductInfoSpan,
  CartProductInfoSpanName,
  CartProductPrice,
  CartProductQty,
  CartTitle,
} from './Cart.styled'

const dummy = [
  {
    id: 'p1',
    name: 'Product 1',
    description: 'test text',
    image: 'asd',
    price: 10,
    category: 'test',
    stocks: 10,
  },
]

function Cart() {
  return (
    <>
      <ShopNavigation />
      <CartMain>
        <Container>
          <CartContent>
            <CartBox>
              <CartTitle>My Cart</CartTitle>
              <CartItems>
                <CartProductInfo>
                  <CartProductInfoSpanName>
                    Product Name
                  </CartProductInfoSpanName>
                  <CartProductInfoSpan>Price</CartProductInfoSpan>
                  <CartProductInfoSpan>Quantity</CartProductInfoSpan>
                  <CartProductInfoSpan>Total</CartProductInfoSpan>
                  <CartProductInfoSpan>Action</CartProductInfoSpan>
                </CartProductInfo>
                {dummy.map(d => (
                  <CartProduct>
                    <CartProductInfoDiv>
                      <CartProductImage src={d.image} />
                      <CartProductInfoName>{d.name}</CartProductInfoName>
                    </CartProductInfoDiv>
                    <CartProductPrice>{d.price}</CartProductPrice>
                    <CartProductQty></CartProductQty>
                  </CartProduct>
                ))}
              </CartItems>
            </CartBox>
          </CartContent>
        </Container>
      </CartMain>
    </>
  )
}

export default Cart
