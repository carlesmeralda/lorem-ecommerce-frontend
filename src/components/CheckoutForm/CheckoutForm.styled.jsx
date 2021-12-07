import styled from 'styled-components'

export const CFCard = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 400px;
`

export const CFForm = styled.form`
  padding: 1em;

  div {
    margin: 0.8em 0;
  }

  span {
    font-size: 0.8rem;
    color: red;
  }

  button {
    background-color: #222;
    color: #eee;
    border: none;
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1rem;
    transition: 0.1s ease-in-out all;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`

export const CFInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-size: 1rem;
  }

  input {
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    height: 2.5rem;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
`
