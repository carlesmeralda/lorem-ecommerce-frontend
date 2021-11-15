import React, { useContext, useState } from 'react'
import { ShopContext } from '../../../context/shopContext'
import {
  NavCart,
  NavFavorite,
  NavProfile,
  NavSearch,
  NavDiv,
  NavActionLink,
  NavSearchForm,
  NavSearchInput,
  NavSearchDiv,
  NavSearchButton,
  NavCount,
} from './NavAction.styled'

function NavAction() {
  const [openSearch, setOpenSearch] = useState(false)
  const toggleHandler = () => setOpenSearch(true)

  const shopCtx = useContext(ShopContext)

  return (
    <>
      <NavSearchDiv>
        {openSearch ? (
          <NavSearchForm>
            <NavSearchInput placeholder="Search..." />
            <NavSearchButton>
              <NavSearch />
            </NavSearchButton>
          </NavSearchForm>
        ) : (
          <NavSearch onClick={toggleHandler} />
        )}
      </NavSearchDiv>
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
    </>
  )
}

export default NavAction
