import React from 'react'

import ProductCard from './ProductCard'


import { Productscontainer } from './ProductsCardStyles'
import { useSelector } from 'react-redux'


const ProductsCard = () => {

  const products = useSelector(state => state.products.products)
  
  return (
    <>
      <Productscontainer>
        {
        Object.entries(products).map(([, ropas]) => {
          return ropas.map((ropa) => {
            return <ProductCard {...ropa} key={ropa.id}/>
          })
        })
      }
      </Productscontainer>


      
    </>
  )
}

export default ProductsCard