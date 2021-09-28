import styled from 'styled-components'

import { Button } from '../Button'

import { Link } from 'react-router-dom'

export const CardDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const CardLink = styled(Link)``

export const CardImage = styled.img`
  width: 22rem;
  height: 14rem;
  object-fit: cover;
  transition: all 0.3s ease-in;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'title price'
    'desc desc'
    'cart wish';
  padding: 1rem;
  gap: 1rem;
`

export const CardTitle = styled.span`
  grid-area: title;
  font-size: 1.2rem;
  font-weight: 600;
`

export const CardPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  grid-area: price;
  text-align: end;

  &::before {
    content: '$';
    font-size: 1rem;
    position: relative;
    top: -0.3rem;
    padding-right: 0.1rem;
  }
`

export const CardDescription = styled.span`
  grid-area: desc;
  font-size: 1rem;
  color: #a1a1a1;
`

export const AddCart = styled(Button)`
  grid-area: cart;
`

export const AddWish = styled(Button)`
  grid-area: wish;
`
