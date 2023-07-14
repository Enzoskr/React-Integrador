import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

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

const ModalCartCard = () => {
  return (
    <ProductContainerStyled>
      <img
        src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/418/products/1-838077-0101-3f1e6a31eba9bb334b15907762078021-640-0.jpg'
        alt='Nike Dri Fit'
      />
      <TextContainerStyled>
        <CardTitleStyled>Termica nike dri fit</CardTitleStyled>
        <TextStyled>Nike</TextStyled>
        <PriceStyled>{formatPrice(3000)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={e => e.preventDefault()}
        >
          <FaMinus />
        </Increase>
        <Count>3</Count>
        <Increase onClick={e => e.preventDefault()}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
