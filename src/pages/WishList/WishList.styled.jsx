import styled from 'styled-components'

import { IoTrashSharp } from 'react-icons/io5'
import { IoBagAddOutline } from 'react-icons/io5'

export const WishMain = styled.main`
  margin-top: 5em;
`

export const WishContent = styled.div``

export const WishBox = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  padding: 1em;
`

export const WishTitle = styled.h2`
  margin: 0 0 0.5em 0;
`

export const WishTable = styled.div``

export const WishItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'product product '
    'price action';
  border: 0.1px solid #ddd;
  margin-bottom: 1em;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'product product price action';
  }
`

export const WishProductName = styled.div`
  border: 0.1px solid #ddd;
  grid-area: product;
`

export const WishPrice = styled.div`
  border: 0.1px solid #ddd;
  grid-area: price;
`

export const WishAction = styled.div`
  border: 0.1px solid #ddd;
  grid-area: action;
`

export const WishHead = styled.div`
  background-color: #eee;
  font-size: 0.8rem;

  span {
    margin-left: 5px;
  }
`

export const WishBody = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 70%;
`

export const WishProductBody = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.1rem;
`

export const WishName = styled.span`
  margin-left: 5px;
`

export const WishImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`

export const WishAdd = styled(IoBagAddOutline)`
  color: #1d3573;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
`

export const WishDelete = styled(IoTrashSharp)`
  color: #940d0d;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
`
