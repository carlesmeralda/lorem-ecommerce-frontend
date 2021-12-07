import React, { useContext, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CFCard, CFForm, CFInput } from './CheckoutForm.styled'
import { ShopContext } from '../../context/shopContext'
import { useHistory } from 'react-router'

function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const { push } = useHistory()

  const { clearCart } = useContext(ShopContext)

  const payHandler = async e => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      push('/shop/success')
      clearCart()
    }, 1200)
  }

  return (
    <CFCard>
      <CFForm onSubmit={payHandler}>
        <CFInput>
          <label>Name:</label>
          <input type="text" autoFocus />
        </CFInput>
        <CFInput>
          <label>Email:</label>
          <input type="text" />
        </CFInput>
        <CFInput>
          <label>Address:</label>
          <input type="text" />
        </CFInput>
        <div>
          <CardElement />
          <span>
            (Note: This app is still on test mode. Default valid card number is
            4242 4242 4242 4242)
          </span>
        </div>
        <button type="submit">{!isLoading ? 'Pay' : 'Processing...'}</button>
      </CFForm>
    </CFCard>
  )
}

export default CheckoutForm
