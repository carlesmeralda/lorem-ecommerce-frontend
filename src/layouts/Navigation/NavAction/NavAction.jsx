import React, { useState } from 'react'
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
} from './NavAction.styled'

function NavAction() {
  const [openSearch, setOpenSearch] = useState(false)
  const toggleHandler = () => setOpenSearch(true)

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
    </>
  )
}

export default NavAction
