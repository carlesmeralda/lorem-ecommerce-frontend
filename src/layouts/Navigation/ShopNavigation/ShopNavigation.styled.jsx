import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const ShopLeft = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
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

export const ShopLink = styled(Link)`
  text-decoration: underline;
  color: #222;
  font-size: 1rem;
  margin-right: 0.4rem;
`
