import React, { useContext } from 'react'
import { Header, Nav } from '../Navbar/Navbar.styled'
import {
  ShopLeft,
  ShopLink,
  ShopMiddle,
  ShopRight,
} from './ShopNavigation.styled'
import {
  NavDiv,
  NavCart,
  NavFavorite,
  NavProfile,
  NavActionLink,
  NavSearchForm,
  NavSearchInput,
  NavSearchButton,
  NavSearch,
  NavCount,
} from '../NavAction/NavAction.styled'
import { ShopContext } from '../../../context/shopContext'

function ShopNavigation() {
  const shopCtx = useContext(ShopContext)
  // console.log('Cart:', shopCtx.cart)
  // console.log('Cart Items:', shopCtx.cart.length)

  return (
    <Header>
      <Nav>
        <ShopLeft>
          <ShopLink to="/">Home</ShopLink>
          <ShopLink to="/shop/products">Shop</ShopLink>
        </ShopLeft>
        <ShopMiddle>
          <NavSearchForm>
            <NavSearchInput placeholder="Enter a product " />
            <NavSearchButton>
              <NavSearch />
            </NavSearchButton>
          </NavSearchForm>
        </ShopMiddle>
        <ShopRight>
          <NavDiv>
            <NavActionLink to="/shop/wishlist">
              <NavFavorite />
              {shopCtx.wishlist.length > 0 ? (
                <NavCount>{shopCtx.wishlist.length}</NavCount>
              ) : null}
            </NavActionLink>
          </NavDiv>
          <NavDiv>
            <NavActionLink to="/shop/cart">
              <NavCart />
              {shopCtx.cart.length > 0 ? (
                <NavCount>{shopCtx.cart.length}</NavCount>
              ) : null}
            </NavActionLink>
          </NavDiv>
          <NavDiv>
            <NavActionLink to="/login">
              <NavProfile />
            </NavActionLink>
          </NavDiv>
        </ShopRight>
      </Nav>
    </Header>
  )
}

export default ShopNavigation
