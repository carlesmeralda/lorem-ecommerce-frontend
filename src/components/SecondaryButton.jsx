import styled from 'styled-components'

export const SecondaryButton = styled.button`
  background-color: ${({ primary }) => (primary ? '#222' : '#eee')};
  color: ${({ primary }) => (primary ? '#eee' : '#222')};
  border: ${({ primary }) => (primary ? '1px solid #222' : '1px solid #222')};
  font-size: ${({ fontBig }) => (fontBig ? '1.1rem' : '1rem')};
  padding: ${({ fontBig }) => (fontBig ? '0.8em 1.2em' : '0.5em 1em')};
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
