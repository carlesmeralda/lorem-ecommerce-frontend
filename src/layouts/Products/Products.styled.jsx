import styled from 'styled-components'
import { Container } from '../../components/Container'

export const ProductSection = styled.section`
  background-color: #222;
  padding: 60px 0;
`

export const ProductContainer = styled(Container)``

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductH1 = styled.h1`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.5rem;
  color: #f3eed9;
`

export const ProductSample = styled.div`
  margin: 2em 0;
  display: grid;
  grid-gap: 2rem 3rem;
  grid-template-columns: minmax(20rem, 1fr);
  justify-content: center;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProductButton = styled.button`
  font-size: 1rem;
  font-family: 'Quicksand', sans-serif;
  color: #fbc02d;
  background-color: transparent;
  border: 1px solid #fbc02d;
  text-align: center;
  padding: 1em 3em;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: #222;
    background-color: #fbc02d;
  }
`
