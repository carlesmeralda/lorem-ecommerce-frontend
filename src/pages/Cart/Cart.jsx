import React, { useState } from 'react'
import { Container } from '../../components/Container'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import {
  CartAction,
  CartBody,
  CartBox,
  CartButton,
  CartContent,
  CartDelete,
  CartHead,
  CartImage,
  CartInput,
  CartItem,
  CartMain,
  CartMinus,
  CartName,
  CartPlus,
  CartPrice,
  CartProductBody,
  CartProductName,
  CartQuantity,
  CartSubInfo,
  CartSubTotal,
  CartTable,
  CartTitle,
  CartTotal,
} from './Cart.styled'

const dummy = [
  {
    id: 'p1',
    name: 'Product 1 ',
    description: 'test text',
    image: 'https://demo.plugins360.com/wp-content/uploads/2017/12/demo.png',
    price: 10,
    category: 'test',
    stocks: 10,
  },
  {
    id: 'p2',
    name: 'Product 2 test ',
    description: 'test 2',
    image: 'https://demo.plugins360.com/wp-content/uploads/2017/12/demo.png',
    price: 25,
    category: 'test2',
    stocks: 10,
  },
]

function Cart() {
  const [qtyValue, setQtyValue] = useState(1)

  const plusHandler = () => {
    if (qtyValue < 10) {
      setQtyValue(prev => prev + 1)
    }
    // setQtyValue(prev => prev + 1)
  }
  const minusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(prev => prev - 1)
    }
    // setQtyValue(prev => prev - 1)
  }

  const inputHandler = e => {}

  return (
    <>
      <ShopNavigation />
      <CartMain>
        <Container>
          <CartContent>
            <CartBox>
              <CartTitle>My Cart</CartTitle>
              <CartTable>
                {dummy.map(item => (
                  <CartItem>
                    <CartProductName>
                      <CartHead>
                        <span>Product Name</span>
                      </CartHead>
                      <CartProductBody>
                        <CartImage src={item.image} alt={item.name} />
                        <CartName>{item.name}</CartName>
                      </CartProductBody>
                    </CartProductName>
                    <CartPrice>
                      <CartHead>
                        <span>Price</span>
                      </CartHead>
                      <CartBody>{'$ ' + item.price}</CartBody>
                    </CartPrice>
                    <CartQuantity>
                      <CartHead>
                        <span>Quantity</span>
                      </CartHead>
                      <CartBody>
                        <CartPlus onClick={plusHandler} />
                        <CartInput
                          type="number"
                          max={dummy.stocks}
                          value={qtyValue}
                          onChange={inputHandler}
                        />
                        <CartMinus onClick={minusHandler} />
                      </CartBody>
                    </CartQuantity>
                    <CartTotal>
                      <CartHead>
                        <span>Total</span>
                      </CartHead>
                      <CartBody>{'$ ' + item.price}</CartBody>
                    </CartTotal>
                    <CartAction>
                      <CartHead>
                        <span>Action</span>
                      </CartHead>
                      <CartBody>
                        <CartDelete />
                      </CartBody>
                    </CartAction>
                  </CartItem>
                ))}
              </CartTable>
            </CartBox>
          </CartContent>
          <CartSubTotal>
            <CartSubInfo>
              <h6>Subtotal (x) Items</h6>
              <h5>$1000</h5>
            </CartSubInfo>
            <CartButton>Procced to Checkout</CartButton>
          </CartSubTotal>
        </Container>
      </CartMain>
    </>
  )
}

export default Cart
