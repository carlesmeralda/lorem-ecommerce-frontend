import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAxios } from '../../hooks/useAxios'
import {
  ProductContainer,
  ProductShopSection,
  ShopContent,
} from './ProductShop.styled'

function ProductShop() {
  const [products, setProducts] = useState([])

  const { data, isLoading, error } = useAxios({
    url: '/shop/products',
  })

  useEffect(() => {
    if (data !== null) {
      setProducts(data.products)
    }
  }, [data])

  return (
    <ProductShopSection>
      <ProductContainer>
        <ShopContent>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ShopContent>
      </ProductContainer>
    </ProductShopSection>
  )
}

export default ProductShop
