import styled from 'styled-components'

import { BiPlus, BiMinus } from 'react-icons/bi'
import { IoTrashSharp } from 'react-icons/io5'

export const CartMain = styled.main`
  margin-top: 5em;
`

export const CartContent = styled.div``

export const CartBox = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  padding: 1em;
`

export const CartTitle = styled.h2`
  margin: 0 0 0.5em 0;
`

export const CartTable = styled.div``

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'product product price'
    'quantity total action';

  border: 0.1px solid #ddd;
  margin-bottom: 1em;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 'product product price quantity total action';
  }
`

export const CartProductName = styled.div`
  grid-area: product;
  border: 0.1px solid #ddd;
`

export const CartPrice = styled.div`
  grid-area: price;
  border: 0.1px solid #ddd;
`

export const CartQuantity = styled.div`
  grid-area: quantity;
  border: 0.1px solid #ddd;
`

export const CartTotal = styled.div`
  grid-area: total;
  border: 0.1px solid #ddd;
`

export const CartAction = styled.div`
  grid-area: action;
  border: 0.1px solid #ddd;
`

export const CartHead = styled.div`
  background-color: #eee;
  font-size: 0.8rem;

  span {
    margin-left: 5px;
  }
`

export const CartBody = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 75%;
`

export const CartProductBody = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.1rem;
`

export const CartName = styled.span`
  margin-left: 5px;
`

export const CartImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`

export const CartInput = styled.input`
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

export const CartPlus = styled(BiPlus)`
  cursor: pointer;
`

export const CartMinus = styled(BiMinus)`
  cursor: pointer;
`

export const CartDelete = styled(IoTrashSharp)`
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
`
