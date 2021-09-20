import React from 'react'
import {
  ProductSection,
  ProductH1,
  ProductSample,
  ProductButton,
  ProductContent,
} from './Products.styled'

import { Container } from '../../components/Container'

import ProductCard from '../../components/ProductCard/ProductCard'

const products = [
  {
    id: 'p1',
    name: 'Dummy1',
    description: 'blablabla',
    price: 14.99,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    name: 'Dumbo',
    description: 'hehehe',
    price: 14.99,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1611864581049-aca018410b97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
    name: 'Damdam',
    description: 'joemama',
    price: 15.69,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1616423641454-caa695af6a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
    name: 'A product',
    description:
      'a descriptiona descriptiona descriptiona descriptiona description',
    price: 10.99,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'p5',
    name: 'Mufaka',
    description: 'yooooo',
    price: 20.0,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1518117743130-17d4de973e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p6',
    name: 'HAHAHA',
    description: 'idc',
    price: 100,
    category: 'Test',
    image:
      'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
]

function Products() {
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
          <ProductButton to="/products">View All Products</ProductButton>
        </ProductContent>
      </Container>
    </ProductSection>
  )
}

export default Products
