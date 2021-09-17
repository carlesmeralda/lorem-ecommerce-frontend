import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#15451d' : '#fbc02d')};
  color: ${({ primary }) => (primary ? '#f3eed9' : '#222')};
  font-size: ${({ fontBig }) => (fontBig ? '1.1rem' : '1rem')};
  padding: ${({ fontBig }) => (fontBig ? '0.8em 1.2em' : '0.5em 1em')};
  font-family: 'Quicksand', sans-serif;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`
