import React from 'react'
import { Header, Nav } from '../Navbar/Navbar.styled'
import {
  ShopLeft,
  ShopLink,
  ShopLinkHome,
  ShopMiddle,
  ShopNavLinkLogo,
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
} from '../NavAction/NavAction.styled'
import Logo from '../../../components/Logo/Logo'

function ShopNavigation() {
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
            </NavActionLink>
          </NavDiv>
          <NavDiv>
            <NavActionLink to="/shop/cart">
              <NavCart />
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
