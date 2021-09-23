import styled from 'styled-components'

import { HiOutlineMenu } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.25);
  display: flex;
  align-items: center;
  z-index: 999;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 1em;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  color: #222;
`

export const NavLeft = styled.div`
  display: flex;
  height: 100%;
`

export const NavMiddle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.8rem;
  padding-left: 2rem;

  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const NavRight = styled.div`
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`

export const ToggleDrawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(40%, 40%);
  cursor: pointer;
  z-index: 99;
`

export const DrawerOpen = styled(HiOutlineMenu)`
  font-size: 2rem;

  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const DrawerClose = styled(IoCloseOutline)`
  font-size: 2rem;
`
