import React from 'react'
import { CardPrice, ContainerPrice, ProductsCard } from './ProductsStyles'
const ProductCard = ({img, name, desc, price}) => {
  return (
    <ProductsCard>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>${price}</CardPrice>
            <button>Comprar</button>
        </ContainerPrice>
    </ProductsCard>
  )
}

export default ProductCard