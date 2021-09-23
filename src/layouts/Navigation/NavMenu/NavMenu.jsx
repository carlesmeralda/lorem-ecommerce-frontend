import React from 'react'
import {
  NavItem,
  NavItemLogo,
  NavLinkLogo,
  NavList,
  NavLink,
} from './NavMenu.styled'
import Logo from '../../../components/Logo/Logo'

function NavMenu({ open, closeHandler }) {
  return (
    <NavList open={open}>
      <NavItemLogo>
        <NavLinkLogo to="/">
          <Logo />
        </NavLinkLogo>
      </NavItemLogo>
      <NavItem>
        <NavLink
          to="home"
          spy
          smooth
          duration={500}
          offset={-60}
          activeClass="active"
          onClick={closeHandler}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="about"
          spy
          smooth
          duration={500}
          offset={-60}
          activeClass="active"
          onClick={closeHandler}
        >
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="product"
          spy
          smooth
          duration={500}
          offset={-60}
          activeClass="active"
          onClick={closeHandler}
        >
          Product
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="discover"
          spy
          smooth
          duration={500}
          offset={-60}
          activeClass="active"
          onClick={closeHandler}
        >
          Discover
        </NavLink>
      </NavItem>
    </NavList>
  )
}

export default NavMenu
