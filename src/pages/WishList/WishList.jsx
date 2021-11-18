import React, { useContext } from 'react'
import { ActionButton } from '../../components/ActionButton'
import { Container } from '../../components/Container'
import { ShopContext } from '../../context/shopContext'
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
  WishTable2,
  WishLink2,
  WishFooter,
  WishButton,
  WishLink,
} from './WishList.styled'

function WishList() {
  const { wishlist, addToCart, deleteWish, clearWish } = useContext(ShopContext)

  const allToCart = () => {
    wishlist.forEach(item => addToCart(item))
  }

  return (
    <>
      <ShopNavigation />
      <WishMain>
        <Container>
          <WishContent>
            <WishBox>
              <WishTitle>My Wish List</WishTitle>
              {wishlist < 1 && (
                <WishTable2>
                  No items in your wish list.
                  <WishLink2 to={`/shop/products/`}>View Shop</WishLink2>
                </WishTable2>
              )}
              <WishTable>
                {wishlist.map(item => (
                  <WishItem key={item.id}>
                    <WishLink to={`/shop/products/${item.id}`}>
                      <WishProductName>
                        <WishHead>
                          <span>Product Name</span>
                        </WishHead>
                        <WishProductBody>
                          <WishImage src={item.image} alt={item.name} />
                          <WishName>{item.name}</WishName>
                        </WishProductBody>
                      </WishProductName>
                    </WishLink>
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
                        <WishAdd onClick={() => addToCart(item)} />
                        <WishDelete onClick={() => deleteWish(item)} />
                      </WishBody>
                    </WishAction>
                  </WishItem>
                ))}
              </WishTable>
            </WishBox>
          </WishContent>
          <WishFooter>
            <WishButton>
              <ActionButton onClick={allToCart}>Add all to cart</ActionButton>
              <ActionButton primary onClick={() => clearWish()}>
                Clear Wish list
              </ActionButton>
            </WishButton>
          </WishFooter>
        </Container>
      </WishMain>
    </>
  )
}

export default WishList
