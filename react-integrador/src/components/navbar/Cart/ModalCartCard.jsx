import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increased';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { AddToCart, removeFromCart } from '../../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ModalCartCard = ({img, name, desc, id, quantity, price}) => {
  const dispatch = useDispatch()
  
  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={name}
      />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <BsTrash3/> : <FaMinus />}
        
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(AddToCart(
          {img, name, desc, id, quantity, price}))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
