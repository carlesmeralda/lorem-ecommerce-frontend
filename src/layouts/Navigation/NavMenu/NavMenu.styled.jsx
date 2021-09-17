import styled from 'styled-components'

import { Link as SLink } from 'react-scroll'

export const NavList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 100vh;
  width: 70%;
  margin: 0;
  padding-top: 3.5em;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 769px) {
    display: flex;
    height: 100%;
    width: auto;
    transform: none;
    background: none;
    position: relative;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`

export const NavItem = styled.li`
  padding: 3em 1em 3em 0;
  text-transform: uppercase;
  border-bottom: 1px solid burlywood;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    height: 100%;
    padding: 0 1em;
    text-transform: uppercase;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid burlywood;
    }

    &.active {
      color: red;
    }
  }
`

export const NavLink = styled(SLink)``

export const NavItemLogo = styled.li`
  margin-right: 1em;
`

export const NavLinkLogo = styled(SLink)`
  color: #222;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;

  @media screen and (min-width: 769px) {
    font-size: 1.8rem;
  }
`
