import React from 'react'
import {
  NavCart,
  NavFavorite,
  NavProfile,
  NavSearch,
  NavDiv,
  NavActionLink,
} from './NavAction.styled'

function NavAction() {
  return (
    <>
      <NavDiv>
        <NavSearch />
      </NavDiv>
      <NavDiv>
        <NavActionLink to="/#">
          <NavFavorite />
        </NavActionLink>
      </NavDiv>
      <NavDiv>
        <NavActionLink to="/#">
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
