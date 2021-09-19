import styled from 'styled-components'

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from 'react-icons/fa'

export const ContactFooter = styled.footer`
  background: #f3eed9;
  padding: 60px 0;
`

export const ContactContent = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ContactAccess = styled.div`
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`

export const ContactH3 = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`

export const ContactPara = styled.p`
  margin-bottom: 1.8rem;
`

export const ContactForm = styled.div`
  display: flex;
  justify-content: center;
`

export const ContactInput = styled.input`
  font-family: 'Quicksand', sans-serif;
  flex: 1;
  outline: none;
  font-size: 1rem;
  border: none;
  padding-left: 0.5rem;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 45%;
  }
`

export const ContactSocialText = styled.h3`
  font-size: 1.8rem;

  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`

export const ContactSocials = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: #222;
`

export const ContactFb = styled(FaFacebookSquare)``

export const ContactTw = styled(FaTwitter)``

export const ContactIg = styled(FaInstagram)``

export const ContactGg = styled(FaGoogle)``

export const ContactDetails = styled.span`
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
`
