import styled from 'styled-components'

export const SuccessDiv = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const SuccessImg = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`

export const SuccessText = styled.div`
  p {
    padding: 0 2em;
    text-align: center;
  }
`
