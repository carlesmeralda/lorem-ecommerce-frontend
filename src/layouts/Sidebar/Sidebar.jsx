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
            <SidebarItems>New Arrivals</SidebarItems>
            <SidebarItems>Top Sales</SidebarItems>
            <SidebarItems>Asending</SidebarItems>
            <SidebarItems>Descending</SidebarItems>
            <SidebarItems>Lowest Price</SidebarItems>
            <SidebarItems>Highest Price</SidebarItems>
          </SidebarQueries>
        </SidebarRows>
        <SidebarRows>
          <SidebarText>Choose category</SidebarText>
          <SidebarQueries>
            <SidebarLink to="/shop/products?category=Men%20Apparels">
              <SidebarItems>Men Apparels</SidebarItems>
            </SidebarLink>
            <SidebarItems>Women Apparels</SidebarItems>
            <SidebarItems>Kid Apparels</SidebarItems>
            <SidebarItems>Shoes</SidebarItems>
            <SidebarItems>Accessories</SidebarItems>
            <SidebarItems>Aesthetics</SidebarItems>
            <SidebarItems>Electronics & Gadgets</SidebarItems>
            <SidebarItems>Toys & Games</SidebarItems>
            <SidebarItems>Arts & Crafts</SidebarItems>
            <SidebarItems>Home & Living</SidebarItems>
            <SidebarItems>Health</SidebarItems>
            <SidebarItems>Travel</SidebarItems>
            <SidebarItems>Sports</SidebarItems>
            <SidebarItems>Entertainment</SidebarItems>
            <SidebarItems>Food</SidebarItems>
            <SidebarItems>Others</SidebarItems>
          </SidebarQueries>
        </SidebarRows>
      </SidebarContent>
    </SidebarSection>
  )
}

export default Sidebar
