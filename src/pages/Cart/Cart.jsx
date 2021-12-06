import React, { useContext } from 'react'
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
  CartLink,
  CartLink2,
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
  CartTable2,
  CartTitle,
  CartTotal,
} from './Cart.styled'
import { useHistory } from 'react-router'

function Cart() {
  const { cart, deleteCart, clearCart, increase, decrease } =
    useContext(ShopContext)

  const { push } = useHistory()

  const totalItems = cart.reduce((curr, next) => curr + next.quantity, 0)
  const totalPrice = cart.reduce(
    (curr, next) => curr + next.quantity * next.price,
    0
  )

  console.log(cart)

  return (
    <>
      <ShopNavigation />
      <CartMain>
        <Container>
          <CartContent>
            <CartBox>
              <CartTitle>My Cart</CartTitle>
              {cart.length < 1 && (
                <CartTable2>
                  No items in the cart yet.
                  <CartLink2 to={`/shop/products/`}>Start Shopping</CartLink2>
                </CartTable2>
              )}
              <CartTable>
                {cart.map(item => (
                  <CartItem key={item.id}>
                    <CartLink to={`/shop/products/${item.id}`}>
                      <CartProductName>
                        <CartHead>
                          <span>Product Name</span>
                        </CartHead>
                        <CartProductBody>
                          <CartImage src={item.image} alt={item.name} />
                          <CartName>{item.name}</CartName>
                        </CartProductBody>
                      </CartProductName>
                    </CartLink>
                    <CartPrice>
                      <CartHead>
                        <span>Price</span>
                      </CartHead>
                      <CartBody>
                        {'$ ' +
                          Math.round((item.price + Number.EPSILON) * 100) / 100}
                      </CartBody>
                    </CartPrice>
                    <CartQuantity>
                      <CartHead>
                        <span>Quantity ({item.stocks})</span>
                      </CartHead>
                      <CartBody>
                        <CartPlus onClick={() => increase(item)} />
                        <CartInput
                          type="number"
                          value={item.quantity}
                          onChange={() => {}}
                        />
                        <CartMinus onClick={() => decrease(item)} />
                      </CartBody>
                    </CartQuantity>
                    <CartTotal>
                      <CartHead>
                        <span>Total</span>
                      </CartHead>
                      <CartBody>
                        {'$ ' +
                          Math.round(
                            (item.price * item.quantity + Number.EPSILON) * 100
                          ) /
                            100}
                      </CartBody>
                    </CartTotal>
                    <CartAction>
                      <CartHead>
                        <span>Action</span>
                      </CartHead>
                      <CartBody>
                        <CartDelete onClick={() => deleteCart(item)} />
                      </CartBody>
                    </CartAction>
                  </CartItem>
                ))}
              </CartTable>
            </CartBox>
          </CartContent>
          <CartSubTotal>
            <CartSubInfo>
              <h6>Subtotal ({totalItems}) Items</h6>
              <h5>${Math.round((totalPrice + Number.EPSILON) * 100) / 100}</h5>
            </CartSubInfo>
            <CartButton>
              <ActionButton onClick={() => push('/shop/checkout')}>
                Checkout
              </ActionButton>
              <ActionButton primary onClick={() => clearCart()}>
                Clear Cart
              </ActionButton>
            </CartButton>
          </CartSubTotal>
        </Container>
      </CartMain>
    </>
  )
}

export default Cart
