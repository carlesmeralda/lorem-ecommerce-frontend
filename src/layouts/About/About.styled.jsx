import styled from 'styled-components'
import { Container } from '../../components/Container'

export const AboutSection = styled.section`
  padding: 60px 0;
`

export const AboutContainer = styled(Container)`
  width: 85%;
`

export const AboutContent = styled.div`
  display: block;
  flex-wrap: wrap;

  @media screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'img h2'
      'img p';
  }
`

export const AboutHeading = styled.div`
  display: flex;
  align-items: flex-end;
`

export const AboutTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.7rem;
  font-style: italic;
  font-weight: 700;
  color: #824936;
  margin: 0.5em auto;
  text-align: center;
  position: relative;
  display: block;
  width: 80%;
  grid-area: h2;

  &::before {
    content: '';
    position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 5px;
    bottom: -1rem;
    left: 0;
    right: 0;
    background-color: #fcb02d;
  }

  @media screen and (min-width: 700px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 3.2rem;
  }
`

export const AboutText = styled.div`
  margin-top: 3rem;
  grid-area: p;

  @media screen and (min-width: 700px) {
    margin-top: 0;
  }
`

export const AboutPara = styled.p`
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;

  @media screen and (min-width: 700px) {
    margin: 1em;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1rem;
  }
`

export const AboutSpan = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 1.5rem;

  @media screen and (min-width: 700px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.8rem;
  }
`

export const AboutGraphic = styled.div`
  grid-area: img;
`

export const AboutImg = styled.img`
  width: 100%;
`
