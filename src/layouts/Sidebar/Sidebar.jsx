import React, { useState } from 'react'
import {
  ControlLeft,
  ControlRight,
  SidebarContent,
  SidebarControl,
  SidebarItems,
  SidebarLink,
  SidebarQueries,
  SidebarRows,
  SidebarSection,
  SidebarText,
} from './Sidebar.styled'
import { category, category2 } from '../../assets/data/categories'

function Sidebar() {
  const [toggle, setToggle] = useState(false)
  const toggleHandler = () => setToggle(prev => !prev)

  return (
    <SidebarSection toggle={toggle}>
      <SidebarContent>
        <SidebarControl onClick={toggleHandler}>
          {toggle ? <ControlLeft /> : <ControlRight />}
        </SidebarControl>
        <SidebarRows>
          <SidebarText>Sort by</SidebarText>
          <SidebarQueries>
            {category.map(item => (
              <SidebarLink
                key={item.name}
                to={item.link}
                onClick={toggleHandler}
              >
                <SidebarItems>{item.name}</SidebarItems>
              </SidebarLink>
            ))}
          </SidebarQueries>
        </SidebarRows>
        <SidebarRows>
          <SidebarText>Choose category</SidebarText>
          <SidebarQueries>
            {category2.map(item => (
              <SidebarLink
                key={item.name}
                to={item.link}
                onClick={toggleHandler}
              >
                <SidebarItems>{item.name}</SidebarItems>
              </SidebarLink>
            ))}
          </SidebarQueries>
        </SidebarRows>
      </SidebarContent>
    </SidebarSection>
  )
}

export default Sidebar
