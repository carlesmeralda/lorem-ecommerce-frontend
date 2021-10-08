import React, { useEffect, useState } from 'react'
import {
  ProductSection,
  ProductH1,
  ProductSample,
  ProductButton,
  ProductContent,
} from './Products.styled'

import { Container } from '../../components/Container'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAxios } from '../../hooks/useAxios'

function Products() {
  const [products, setProducts] = useState([])

  const { data, isLoading, error } = useAxios({
    url: '/shop/products?limit=6',
  })

  useEffect(() => {
    if (data !== null) {
      setProducts(data.products)
    }
  }, [data])

  return (
    <ProductSection id="product">
      <Container>
        <ProductContent>
          <ProductH1>Our Products</ProductH1>
          <ProductSample>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductSample>
          <ProductButton to="/shop/products">View All Products</ProductButton>
        </ProductContent>
      </Container>
    </ProductSection>
  )
}

export default Products
