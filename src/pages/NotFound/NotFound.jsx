import React from 'react'

import notFound from '../../assets/image/404.svg'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import { NotFoundDiv, NotFoundImg, NotFoundText } from './NotFound.styled'

function NotFound() {
  return (
    <>
      <ShopNavigation />
      <NotFoundDiv>
        <NotFoundImg>
          <img src={notFound} alt="Not Found 404" />
        </NotFoundImg>
        <NotFoundText>
          <p>Sorry the page that you are looking for does not exist :((</p>
        </NotFoundText>
      </NotFoundDiv>
    </>
  )
}

export default NotFound
