import styled from 'styled-components'

export const NotFoundDiv = styled.div`
  margin: 5em 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

export const NotFoundImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export const NotFoundText = styled.div`
  padding: 0 2em;
`
