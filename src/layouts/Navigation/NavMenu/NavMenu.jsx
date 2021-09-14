import React from 'react'
import { NavItem, NavLink, NavList } from './NavMenu.styled'

function NavMenu() {
  return (
    <NavList>
      <NavItem>
        <NavLink>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Products</NavLink>
      </NavItem>
    </NavList>
  )
}

export default NavMenu
