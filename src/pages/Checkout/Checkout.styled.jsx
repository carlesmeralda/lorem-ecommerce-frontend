import styled from 'styled-components'
import { Container } from '../../components/Container'

export const CheckoutMain = styled.main`
  margin: 5em 0 1em 0;
`

export const CheckoutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`
