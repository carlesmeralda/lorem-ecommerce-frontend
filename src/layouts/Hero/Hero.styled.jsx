import styled from 'styled-components'

import { Button } from '../../components/Button'

export const HeroSection = styled.section`
  margin-top: 60px;
  background: #f3eed9;
  padding: 3rem 0;
`

export const HeroContent = styled.div`
  display: block;
  flex-wrap: wrap;

  @media screen and (min-width: 550px) {
    display: flex;
    justify-content: space-between;
  }
`

export const HeroInfo = styled.div`
  width: 100%;

  @media screen and (min-width: 550px) {
    font-size: 1rem;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 55%;
  }

  @media screen and (min-width: 900px) {
    width: 60%;
  }
`

export const HeroGraphic = styled.div`
  width: 100%;

  @media screen and (min-width: 550px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 900px) {
    width: 40%;
  }
`

export const HeroImage = styled.img`
  width: 100%;
`

export const HeroTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  color: #824936;
  font-size: 2.8rem;

  @media screen and (min-width: 550px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    margin-top: 0.5em;
  }

  @media screen and (min-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1300px) {
    font-size: 3.3rem;
  }
`

export const HeroText = styled.p`
  font-size: 1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.2rem;
  }
`

export const HeroButton = styled(Button)`
  font-size: 1rem;
  margin: 1em 0;

  @media screen and (min-width: 900px) {
    font-size: 1.2rem;
  }
`
