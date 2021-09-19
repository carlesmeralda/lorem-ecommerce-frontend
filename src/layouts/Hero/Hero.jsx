import React from 'react'
import {
  HeroButton,
  HeroContent,
  HeroGraphic,
  HeroImage,
  HeroInfo,
  HeroSection,
  HeroText,
  HeroTitle,
} from './Hero.styled'
import { Container } from '../../components/Container'

import hero from '../../assets/image/hero.svg'

function Hero() {
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <HeroInfo>
            <HeroTitle>
              Magna sit amet purus gravida quis blandit turpis cursus in.
            </HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              nullam non nisi est sit amet.
            </HeroText>
            <HeroButton fontBig primary>
              Get Started
            </HeroButton>
          </HeroInfo>
          <HeroGraphic>
            <HeroImage src={hero} />
          </HeroGraphic>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
