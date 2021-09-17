import React, { useState } from 'react'
import {
  DrawerClose,
  DrawerOpen,
  Header,
  Nav,
  NavLeft,
  NavMiddle,
  NavRight,
  ToggleDrawer,
} from './Navbar.styled'
import NavAction from '../NavAction/NavAction'
import Logo from '../../../components/Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'

function Navbar() {
  const [open, setOpen] = useState(false)

  const openHandler = () => setOpen(!open)

  return (
    <Header>
      <Nav>
        <NavLeft>
          <ToggleDrawer onClick={openHandler}>
            {open ? <DrawerClose /> : <DrawerOpen />}
          </ToggleDrawer>
          <NavMenu open={open} />
        </NavLeft>
        <NavMiddle>
          <Logo />
        </NavMiddle>
        <NavRight>
          <NavAction />
        </NavRight>
      </Nav>
    </Header>
  )
}

export default Navbar
