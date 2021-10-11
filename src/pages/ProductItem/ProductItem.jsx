import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import ShopNavigation from '../../layouts/Navigation/ShopNavigation/ShopNavigation'
import { Container } from '../../components/Container'
import {
  ProductItemActions,
  ProductItemContent,
  ProductItemImage,
  ProductItemInfo,
  ProductItemInput,
  ProductItemKey,
  ProductItemMain,
  ProductItemMinus,
  ProductItemPlus,
  ProductItemQty,
  ProductItemValue,
} from './ProductItem.styled'
import { Button } from '../../components/Button'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

function ProductItem() {
  const [qtyValue, setQtyValue] = useState(1)
  const [product, setProduct] = useState()
  const { productId } = useParams()

  const { data, isLoading, error } = useAxios({
    url: '/shop/products/' + productId,
  })

  useEffect(() => {
    if (data !== null) {
      setProduct(data.product)
    }
  }, [data])

  const plusHandler = () => {
    if (qtyValue < product.stocks) {
      setQtyValue(prev => prev + 1)
    }
  }
  const minusHandler = () => {
    if (qtyValue > 1) {
      setQtyValue(prev => prev - 1)
    }
  }

  const inputHandler = e => {}

  if (error) return <div>{error}</div>

  if (isLoading) return <LoadingSpinner />

  return (
    <>
      <ShopNavigation />
      <ProductItemMain>
        <Container>
          <ProductItemContent>
            <ProductItemImage>
              <img src={product.image} alt={product.name} />
            </ProductItemImage>
            <ProductItemInfo>
              <ProductItemValue>
                <ProductItemKey>Name:</ProductItemKey>
                {product.name}
              </ProductItemValue>
              <ProductItemValue>
                <ProductItemKey>Description:</ProductItemKey>
                {product.description}
              </ProductItemValue>
              <ProductItemValue>
                <ProductItemKey>Price:</ProductItemKey>
                {'$' + product.price}
              </ProductItemValue>
              <ProductItemValue>
                <ProductItemKey>Category:</ProductItemKey>
                {product.category}
              </ProductItemValue>
              <ProductItemValue>
                <ProductItemKey>Stocks:</ProductItemKey>
                {product.stocks}
              </ProductItemValue>
              <ProductItemQty>
                <ProductItemKey>Quantity:</ProductItemKey>
                <ProductItemPlus onClick={plusHandler} />
                <ProductItemInput
                  type="number"
                  max={product.stocks}
                  value={qtyValue}
                  onChange={inputHandler}
                />
                <ProductItemMinus onClick={minusHandler} />
              </ProductItemQty>
            </ProductItemInfo>
            <ProductItemActions>
              <Button>Add to Cart</Button>
              <Button primary>Add to WishList</Button>
            </ProductItemActions>
          </ProductItemContent>
        </Container>
      </ProductItemMain>
    </>
  )
}

export default ProductItem
