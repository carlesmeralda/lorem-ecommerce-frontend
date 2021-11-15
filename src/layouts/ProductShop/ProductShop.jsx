import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAxios } from '../../hooks/useAxios'
import {
  ProductContainer,
  ProductShopSection,
  ShopContent,
} from './ProductShop.styled'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function ProductShop() {
  const query = useQuery()
  const [products, setProducts] = useState([])

  const hrefUrl = window.location.href.split('/')
  const urlElement = hrefUrl[3] + '/' + hrefUrl[4]

  const { data, isLoading, error } = useAxios({
    url: urlElement,
  })

  useEffect(() => {
    if (data !== null) {
      setProducts(data.products)
    }
  }, [data])

  return (
    <ProductShopSection>
      <ProductContainer>
        <h1>{query.get('category') || 'All Products'} </h1>
        {isLoading && <LoadingSpinner />}
        {!isLoading && !error && (
          <ShopContent>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ShopContent>
        )}
        {error && <p>No products found. Try again later.</p>}
      </ProductContainer>
    </ProductShopSection>
  )
}

export default ProductShop
