import styled from 'styled-components'

import { Link as SLink } from 'react-scroll'
import { Link as RLink } from 'react-router-dom'

export const NavList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 100vh;
  width: 70%;
  margin: 0;
  padding-top: 2.5em;
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
  padding: 2em 1em 2em 0;
  text-transform: uppercase;
  border-bottom: 1px solid burlywood;
  cursor: pointer;
  font-size: 2rem;

  @media screen and (min-width: 769px) {
    height: 100%;
    padding: 0 0.5em;
    text-transform: uppercase;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid #fbc02d;
    }
  }
`

export const NavItemLogo = styled.li`
  margin-right: 1em;
`

export const NavLink = styled(SLink)`
  &.active {
    color: #fbc02d;
  }
`

export const NavLinkLogo = styled(RLink)`
  color: #222;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    font-size: 1.8rem;
  }
`
