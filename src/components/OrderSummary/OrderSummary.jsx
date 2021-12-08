import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import {
  OSCard,
  OSItem,
  OSList,
  OSProduct,
  OSQuantity,
  OSTitle,
  OSTotal,
} from './OrderSummary.styled'

function OrderSummary() {
  const { cart } = useContext(ShopContext)

  const totalPrice = cart.reduce(
    (curr, next) => curr + next.quantity * next.price,
    0
  )

  return (
    <OSCard>
      <OSTitle>Order Summary</OSTitle>
      <OSList>
        <OSItem>
          <OSProduct>Product</OSProduct>
          <OSQuantity>Quantity</OSQuantity>
        </OSItem>
        {cart.map(item => {
          return (
            <OSItem key={item.id}>
              <OSProduct>{item.name}</OSProduct>
              <OSQuantity>x {item.quantity}</OSQuantity>
            </OSItem>
          )
        })}
      </OSList>
      <OSTotal>
        Total: ${Math.round((totalPrice + Number.EPSILON) * 100) / 100}
      </OSTotal>
    </OSCard>
  )
}

export default OrderSummary
