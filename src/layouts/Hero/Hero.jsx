import React from 'react'
import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroGraphic,
  HeroImage,
  HeroInfo,
  HeroSection,
  HeroText,
  HeroTitle,
} from './Hero.styled'

import hero from '../../assets/image/hero.svg'

function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
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
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero
