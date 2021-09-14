import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { FaCottonBureau } from 'react-icons/fa'
import { Button } from '../Button'

export const AuthBackground = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #f3eed9;
  display: grid;
  place-items: center;
`
export const AuthLink = styled(Link)`
  position: absolute;
  top: 1em;
  left: 1em;
`
export const AuthIcon = styled(FaCottonBureau)`
  color: #222;
  font-size: 3.5rem;
`
export const AuthForm = styled.form`
  background-color: #222;
  color: #f9f9f9;
  max-width: 320px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`
export const AuthContainer = styled.div`
  padding: 2em;
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
`
export const AuthTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  text-align: center;
`
export const AuthLabel = styled.label`
  margin-top: 0.8em;
  display: block;
  font-size: 1rem;
`
export const AuthInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  transition: all 200ms ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 2px solid darksalmon;
  }
`
export const AuthButton = styled(Button)`
  margin: 1.2em auto;
  width: 60%;
`
export const AuthText = styled.span`
  display: block;
  font-size: 0.7rem;
  text-align: center;
`
export const AuthFormLink = styled(Link)`
  text-decoration: none;
  color: burlywood;
  margin-left: 5px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`
export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 1.3rem;
`
