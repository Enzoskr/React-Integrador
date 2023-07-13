import React from 'react'
import Button from '../UI/Button/Button'
import { 
  CardPrice,
  ContainerPrice,
  ProductsCard,
  ContainerInfo }
  from './ProductsCardStyles'
  import {formatPrice} from '../../utils/formatPrice'


  const ProductCard = ({img, name, desc, price}) => {
    return (
    <ProductsCard>
      <img src={img} alt={name} />
      <ContainerInfo>
        <h3>{name}</h3>
        <p>{desc}</p>
        </ContainerInfo>
        <ContainerPrice>
          <CardPrice>{formatPrice(price)}</CardPrice>
          <Button onClick={e => e.preventDefault()}>Add</Button>
          </ContainerPrice>
    </ProductsCard>
  )
}

export default ProductCard