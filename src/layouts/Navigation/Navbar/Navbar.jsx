import React from 'react'
import Logo from '../Logo/Logo'
import { Header, Nav } from './Navbar.styled'

function Navbar() {
  return (
    <Header>
      <Nav>
        <Logo />
      </Nav>
    </Header>
  )
}

export default Navbar
