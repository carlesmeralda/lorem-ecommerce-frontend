import React from 'react'
import {
  DiscoverSection,
  DiscoverTitle,
  DiscoverContent,
  DiscoverBody,
  DiscoverInfo,
  DiscoverText,
  DiscoverSpan,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
} from './Discover.styled'

import { Container } from '../../components/Container'

function Discover() {
  return (
    <DiscoverSection>
      <Container>
        <DiscoverContent>
          <DiscoverTitle>Discover</DiscoverTitle>
          <DiscoverBody>
            <DiscoverInfo>
              <DiscoverText>
                Made with Passion <Icon1 />
              </DiscoverText>
              <DiscoverSpan>
                Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci
                a scelerisque purus semper eget duis.
              </DiscoverSpan>
            </DiscoverInfo>
            <DiscoverInfo>
              <DiscoverText>
                Premium Quality <Icon2 />
              </DiscoverText>
              <DiscoverSpan>
                Adipiscing tristique risus nec feugiat in fermentum posuere urna
                nec tincidunt praesent semper feugiat nibh.
              </DiscoverSpan>
            </DiscoverInfo>
            <DiscoverInfo>
              <DiscoverText>
                Affordable Prices <Icon3 />
              </DiscoverText>
              <DiscoverSpan>
                Sed faucibus turpis in eu mi bibendum neque egestas congue
                quisque egestas diam in arcu.
              </DiscoverSpan>
            </DiscoverInfo>
            <DiscoverInfo>
              <DiscoverText>
                Pleasing Aesthetics <Icon4 />
              </DiscoverText>
              <DiscoverSpan>
                Risus feugiat in ante metus dictum at tempor commodo ullamcorper
                a lacus vestibulum sed arcu.
              </DiscoverSpan>
            </DiscoverInfo>
          </DiscoverBody>
        </DiscoverContent>
      </Container>
    </DiscoverSection>
  )
}

export default Discover
