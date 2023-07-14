import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { LinkContainerStyled } from './../NavbarStyles';

const CartIcon = ({ hiddenCart, setHiddenCart }) => {
  return (
    <LinkContainerStyled onClick={() => setHiddenCart(!hiddenCart)}>
      <AiOutlineShoppingCart />
      <span>{2}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
