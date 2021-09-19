import React from 'react'
import {
  NavItem,
  NavItemLogo,
  NavLink,
  NavLinkLogo,
  NavList,
} from './NavMenu.styled'
import Logo from '../../../components/Logo/Logo'

function NavMenu({ open }) {
  return (
    <NavList open={open}>
      <NavItemLogo>
        <NavLinkLogo>
          <Logo />
        </NavLinkLogo>
      </NavItemLogo>
      <NavItem>
        <NavLink to="about" activeClass="active">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="product">Product</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="discover">Discover</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="contact">Contact</NavLink>
      </NavItem>
    </NavList>
  )
}

export default NavMenu
