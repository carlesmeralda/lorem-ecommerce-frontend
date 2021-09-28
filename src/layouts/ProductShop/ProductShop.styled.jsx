import styled from 'styled-components'

export const ProductShopSection = styled.div`
  margin-top: 60px;
  flex: 2;

  @media screen and (min-width: 900px) {
    margin-left: 260px;
  }
`
export const ProductContainer = styled.div`
  padding: 2rem;
`

export const ShopContent = styled.div`
  display: grid;
  grid-gap: 2rem 3rem;
  grid-template-columns: minmax(20rem, 1fr);
  justify-content: center;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
