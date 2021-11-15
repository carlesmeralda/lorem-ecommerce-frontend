import React from 'react'
import { Container } from '../../components/Container'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import {
  WishBox,
  WishContent,
  WishMain,
  WishTable,
  WishTitle,
  WishItem,
  WishProductName,
  WishHead,
  WishProductBody,
  WishName,
  WishImage,
  WishPrice,
  WishAction,
  WishBody,
  WishDelete,
  WishAdd,
} from './WishList.styled'

const dummy = [
  {
    id: 'p1',
    name: 'Product 1 ',
    description: 'test text',
    image: 'https://demo.plugins360.com/wp-content/uploads/2017/12/demo.png',
    price: 10,
    category: 'test',
    stocks: 10,
  },
]

function WishList() {
  return (
    <>
      <ShopNavigation />
      <WishMain>
        <Container>
          <WishContent>
            <WishBox>
              <WishTitle>My Wish List</WishTitle>
              <WishTable>
                {dummy.map(item => (
                  <WishItem key={item.id}>
                    <WishProductName>
                      <WishHead>
                        <span>Product Name</span>
                      </WishHead>
                      <WishProductBody>
                        <WishImage src={item.image} alt={item.name} />
                        <WishName>{item.name}</WishName>
                      </WishProductBody>
                    </WishProductName>
                    <WishPrice>
                      <WishHead>
                        <span>Price</span>
                      </WishHead>
                      <WishBody>{'$ ' + item.price}</WishBody>
                    </WishPrice>
                    <WishAction>
                      <WishHead>
                        <span>Action</span>
                      </WishHead>
                      <WishBody>
                        <WishAdd />
                        <WishDelete />
                      </WishBody>
                    </WishAction>
                  </WishItem>
                ))}
              </WishTable>
            </WishBox>
          </WishContent>
        </Container>
      </WishMain>
    </>
  )
}

export default WishList
