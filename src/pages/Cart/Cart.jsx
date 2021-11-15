import React, { useContext, useState } from 'react'
import { Container } from '../../components/Container'
import { ShopContext } from '../../context/shopContext'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import { ActionButton } from '../../components/ActionButton'
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
]

function Cart() {
  const [qtyValue, setQtyValue] = useState(1)

  const shopCtx = useContext(ShopContext)

  const plusHandler = () => {
    if (qtyValue < dummy[0].stocks) {
      setQtyValue(prev => prev + 1)
    }
  }
  const minusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(prev => prev - 1)
    }
  }

  const removeItemHandler = productId => {}

  // needs refactor
  // maybe use forEach for solving the subtotal
  const totalPrice = shopCtx.cart.reduce((curr, next) => curr + next.price, 0)

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
                  <CartItem key={item.id}>
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
                          onChange={() => {}}
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
                        <CartDelete onClick={removeItemHandler} />
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
              <h5>${totalPrice}</h5>
            </CartSubInfo>
            <CartButton>
              <ActionButton>Checkout</ActionButton>
              <ActionButton primary>Clear Cart</ActionButton>
            </CartButton>
          </CartSubTotal>
        </Container>
      </CartMain>
    </>
  )
}

export default Cart
