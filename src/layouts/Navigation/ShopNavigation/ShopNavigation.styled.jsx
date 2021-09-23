import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const ShopLeft = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

export const ShopMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`

export const ShopRight = styled.div`
  display: flex;
  font-size: 1.4rem;
  align-self: center;
`

export const ShopNavLinkLogo = styled(Link)`
  color: #222;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  cursor: pointer;
`
