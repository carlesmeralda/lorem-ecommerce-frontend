import React from 'react'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'

import payment from '../../assets/image/payment.svg'
import { SuccessDiv, SuccessImg, SuccessText } from './Success.styled'

function Success() {
  return (
    <>
      <ShopNavigation />
      <SuccessDiv>
        <SuccessImg>
          <img src={payment} alt="Payment Success" />
        </SuccessImg>
        <SuccessText>
          <p>Order recieved. Thank you for shopping! Please visit us again.</p>
        </SuccessText>
      </SuccessDiv>
    </>
  )
}

export default Success
