import styled from 'styled-components'

import {
  TiFeather,
  TiFlashOutline,
  TiPuzzleOutline,
  TiStarOutline,
} from 'react-icons/ti'

export const DiscoverSection = styled.section`
  background-color: #824936;
  padding: 60px 0;
`

export const DiscoverContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DiscoverTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.5rem;
  color: #f3eed9;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

export const DiscoverBody = styled.div`
  color: #fff;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
  }

  @media screen and (min-width: 1000px) {
    gap: 0 3rem;
  }
`

export const DiscoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3em 0;
  max-width: 350px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin: 2em 0;
  }
`

export const DiscoverText = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0;
  font-weight: 500;
`

export const DiscoverSpan = styled.p`
  line-height: 1.5;
`

export const Icon1 = styled(TiFeather)`
  transform: translateX(5px);
  color: #fbc02d;
`

export const Icon2 = styled(TiFlashOutline)`
  transform: translateX(5px);
  color: #fbc02d;
`

export const Icon3 = styled(TiStarOutline)`
  transform: translateX(5px);
  color: #fbc02d;
`

export const Icon4 = styled(TiPuzzleOutline)`
  transform: translateX(5px);
  color: #fbc02d;
`
