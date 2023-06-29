import React from 'react'
import { ProductsWrapper, Productscontainer } from './ProductsStyles'
import {products} from '../../data/products'
import ProductCard from './ProductCard'

const ProductsCard = () => {
  return (
<ProductsWrapper>
    <h2>Nuestros productos</h2>
    <Productscontainer>
      {
      products.map((product) => {
        return <ProductCard 
        {...product}
        key={product.id}
        />
      })
      }
      </Productscontainer>
</ProductsWrapper>
  )
}

export default ProductsCard