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
  const { cart, wishlist } = useContext(ShopContext)

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
              {wishlist.length > 0 ? (
                <NavCount>{wishlist.length}</NavCount>
              ) : null}
            </NavActionLink>
          </NavDiv>
          <NavDiv>
            <NavActionLink to="/shop/cart">
              <NavCart />
              {cart.length > 0 ? <NavCount>{cart.length}</NavCount> : null}
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
