import styled from 'styled-components'

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

export const SidebarSection = styled.section`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: #eee;
  width: 55%;
  height: 100%;
  padding: 2rem 1rem;
  z-index: 11;
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(-95%)')};
  transition: transform 0.3s ease-in-out;
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const SidebarRows = styled.div`
  margin-bottom: 1.5rem;
`

export const SidebarText = styled.span``

export const SidebarQueries = styled.ul`
  border-right: 1px solid #ccc;
`

export const SidebarItems = styled.li`
  margin: 3px;
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
`

export const ControlRight = styled(RiArrowRightSLine)``

export const ControlLeft = styled(RiArrowLeftSLine)``
