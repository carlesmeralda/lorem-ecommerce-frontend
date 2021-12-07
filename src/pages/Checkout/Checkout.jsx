import React from 'react'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutContainer, CheckoutMain } from './Checkout.styled'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

function Checkout() {
  return (
    <>
      <ShopNavigation />
      <Elements stripe={stripePromise}>
        <CheckoutMain>
          <CheckoutContainer>
            <OrderSummary />
            <CheckoutForm />
          </CheckoutContainer>
        </CheckoutMain>
      </Elements>
    </>
  )
}

export default Checkout
