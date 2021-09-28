import React from 'react'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import ProductShop from '../../layouts/ProductShop/ProductShop'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import { ShopMain } from './Shop.styled'

function Shop() {
  return (
    <>
      <ShopNavigation />
      <ShopMain>
        <Sidebar />
        <ProductShop />
      </ShopMain>
    </>
  )
}

export default Shop
