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
            <SidebarLink to="/shop/products">
              <SidebarItems>All Products</SidebarItems>
            </SidebarLink>
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
            <SidebarLink to="/shop/products?category=Women%20Apparels">
              <SidebarItems>Women Apparels</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Kid%20Apparels">
              <SidebarItems>Kid Apparels</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Shoes">
              <SidebarItems>Shoes</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Accessories">
              <SidebarItems>Accessories</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Aesthetics">
              <SidebarItems>Aesthetics</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Electronics%20%26%20Gadgets">
              <SidebarItems>Electronics & Gadgets</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Toys%20%26%20Games">
              <SidebarItems>Toys & Games</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Arts%20%26%20Craft">
              <SidebarItems>Arts & Crafts</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Home%20%26%20Living">
              <SidebarItems>Home & Living</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Health">
              <SidebarItems>Health</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Travel">
              <SidebarItems>Travel</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Sports">
              <SidebarItems>Sports</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Enterntainment">
              <SidebarItems>Entertainment</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Food">
              <SidebarItems>Food</SidebarItems>
            </SidebarLink>
            <SidebarLink to="/shop/products?category=Others">
              <SidebarItems>Others</SidebarItems>
            </SidebarLink>
          </SidebarQueries>
        </SidebarRows>
      </SidebarContent>
    </SidebarSection>
  )
}

export default Sidebar
