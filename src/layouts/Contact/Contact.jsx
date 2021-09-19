import React from 'react'
import {
  ContactAccess,
  ContactContent,
  ContactDetails,
  ContactFb,
  ContactFooter,
  ContactForm,
  ContactGg,
  ContactH3,
  ContactIg,
  ContactInfo,
  ContactInput,
  ContactPara,
  ContactSocials,
  ContactSocialText,
  ContactTw,
} from './Contact.styled'
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'

function Contact() {
  return (
    <ContactFooter>
      <Container>
        <ContactContent>
          <ContactAccess>
            <ContactH3>Let's get it touch</ContactH3>
            <ContactPara>
              Subscribe to join over 10,000 other users and get updated with our
              newsletter.
            </ContactPara>
            <ContactForm>
              <ContactInput type="text" placeholder="Your Email" />
              <Button primary>SEND</Button>
            </ContactForm>
          </ContactAccess>
          <ContactInfo>
            <ContactSocialText>SOCIAL MEDIA</ContactSocialText>
            <ContactSocials>
              <ContactFb />
              <ContactTw />
              <ContactIg />
              <ContactGg />
            </ContactSocials>
            <ContactDetails>
              Copyright &copy; 2021. All Rights Reserved.
            </ContactDetails>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactFooter>
  )
}

export default Contact
