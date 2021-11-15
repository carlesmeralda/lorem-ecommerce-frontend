import styled from 'styled-components'

import { BiMinus, BiPlus } from 'react-icons/bi'

export const ProductItemMain = styled.main`
  margin-top: 100px;
  height: 100%;
`

export const ProductItemContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'img info'
      'img info'
      'img info'
      'img btn';
  }
`

export const ProductItemImage = styled.div`
  height: 100%;

  grid-area: img;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 1000px) {
    max-height: 500px;
  }
`

export const ProductItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: info;

  @media screen and (min-width: 1000px) {
    margin-left: 2rem;
  }
`

export const ProductItemKey = styled.span`
  margin-right: 0.5rem;
`

export const ProductItemValue = styled.span`
  margin: 0.4rem 0;
`

export const ProductItemQty = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
`

export const ProductItemInput = styled.input`
  width: 2.5rem;
  margin: 0 0.5rem;
  text-align: right;
  outline: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ProductItemPlus = styled(BiPlus)`
  margin-left: 0.5rem;
  cursor: pointer;
`

export const ProductItemMinus = styled(BiMinus)`
  cursor: pointer;
`

export const ProductItemActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  grid-area: btn;
`
