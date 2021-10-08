import styled from 'styled-components'

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const SidebarSection = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: #eee;
  width: 55%;
  height: calc(100vh - 60px);
  padding: 2rem 1rem;
  z-index: 11;
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(-95%)')};
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 900px) {
    transform: none;
    width: 260px;
  }
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const SidebarRows = styled.div`
  margin-bottom: 0.5rem;
`

export const SidebarText = styled.span`
  font-size: 1.1rem;
`

export const SidebarQueries = styled.ul`
  font-size: 1rem;
  border-right: 1px solid #ccc;
  padding-left: 1.5rem;
`

export const SidebarItems = styled.li`
  margin: 4px;
`

export const SidebarControl = styled.div`
  position: absolute;
  top: -20px;
  right: -35px;
  font-size: 2.5rem;
  background: #eee;
  border: none;
  border-radius: 100%;
  padding: 0;
  display: flex;

  @media screen and (min-width: 900px) {
    display: none;
  }
`

export const ControlRight = styled(RiArrowRightSLine)``

export const ControlLeft = styled(RiArrowLeftSLine)``

export const SidebarLink = styled(Link)`
  color: #111;
  transition: all 0.1s ease-out;

  &:hover {
    color: red;
  }
`
