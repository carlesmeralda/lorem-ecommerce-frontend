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

  const toggleHandler = () => setOpen(prev => !prev)

  const closeHandler = () => setOpen(false)

  return (
    <Header>
      <Nav>
        <NavLeft>
          <ToggleDrawer onClick={toggleHandler}>
            {open ? <DrawerClose /> : <DrawerOpen />}
          </ToggleDrawer>
          <NavMenu open={open} closeHandler={closeHandler} />
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
