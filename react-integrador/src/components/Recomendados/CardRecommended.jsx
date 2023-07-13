import React from 'react'
import { formatPrice } from '../../utils/index'

import  Button  from '../UI/Button/Button'

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  InfoCard,
  CardPrice,
} from './CardsRecommendedStyled'

const CardRecommended = ({name, img, price, desc}) => {
  return (
    <Card>
      <CardImg
        src={img}
        alt={name}
      />
      <CardText>
        <CardTitle>{name}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button onClick={e => e.preventDefault()}>Agregar</Button>

    </Card>
  )
}

export default CardRecommended;