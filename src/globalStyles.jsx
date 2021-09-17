import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.1rem;
    font-family: "Quicksand", sans-serif;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`

export default GlobalStyles
