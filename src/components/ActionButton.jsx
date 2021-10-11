import styled from 'styled-components'

export const ActionButton = styled.button`
  background-color: ${({ primary }) => (primary ? '#940d0d' : '#1d3573')};
  color: ${({ primary }) => (primary ? '#f3f5f4' : '#f3f5f4')};
  font-size: ${({ fontBig }) => (fontBig ? '1.1rem' : '1rem')};
  padding: ${({ fontBig }) => (fontBig ? '0.8em 1.2em' : '0.5em 1em')};
  font-family: 'Quicksand', sans-serif;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
