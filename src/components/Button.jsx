import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#824936' : '#f3eed9')};
  color: ${({ primary }) => (primary ? '#f3eed9' : '#222C2A')};
  font-size: ${({ fontBig }) => (fontBig ? '1.1rem' : '1rem')};
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`
