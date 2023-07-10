import React from 'react'

import { 
  CardPrice,
  ContainerPrice,
  ProductsCard,
  ContainerInfo }
  from './ProductsCardStyles'

  const ProductCard = ({img, name, desc, price}) => {
    return (
    <ProductsCard>
      <img src={img} alt={name} />
      <ContainerInfo>
        <h3>{name}</h3>
        <p>{desc}</p>
        </ContainerInfo>
        <ContainerPrice>
          <CardPrice>${price}</CardPrice>
          <button>Comprar</button>
          </ContainerPrice>
    </ProductsCard>
  )
}

export default ProductCard