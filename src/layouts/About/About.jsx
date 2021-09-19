import React from 'react'
import {
  AboutContent,
  AboutGraphic,
  AboutHeading,
  AboutImg,
  AboutPara,
  AboutSection,
  AboutSpan,
  AboutText,
  AboutTitle,
} from './About.styled'
import { Container } from '../../components/Container'

import about from '../../assets/image/about.svg'

function About() {
  return (
    <AboutSection>
      <Container>
        <AboutContent>
          <AboutHeading>
            <AboutTitle>Who are we?</AboutTitle>
          </AboutHeading>
          <AboutText>
            <AboutPara>
              <AboutSpan>Lorem</AboutSpan> ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quam quisque id diam vel quam. Quis imperdiet
              massa tincidunt nunc pulvinar sapien et. Sed blandit libero
              volutpat sed cras. Hac habitasse platea dictumst quisque sagittis
              purus. At erat pellentesque adipiscing commodo elit at imperdiet
              dui.
            </AboutPara>
          </AboutText>
          <AboutGraphic>
            <AboutImg src={about} alt="About Image" />
          </AboutGraphic>
        </AboutContent>
      </Container>
    </AboutSection>
  )
}

export default About
