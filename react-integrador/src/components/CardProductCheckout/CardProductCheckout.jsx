import {BsFillTrash3Fill, BsPlusLg} from 'react-icons/bs'
import { FaMinus} from 'react-icons/fa'

import { 
    CardContainerStyles,
    CardInfoStyled,
    ProductNameStyles,
    ProductPriceStyles, 
    QuantityContainerStyles,
    TextStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils'

import Count from '../UI/Count/Count'
import Increase from '../UI/Increase/Increased'

import {AddToCart, removeFromCart} from '../../redux/cart/cartSlice'

const CardProductCheckout = ({img, name, desc, price,id, quantity}) => {
    
    const dispatch = useDispatch();

  return (
    <CardContainerStyles>
        <img
        src={img}
        alt={name}
         />
        <CardInfoStyled>
            
                <ProductNameStyles>{name}</ProductNameStyles>
                <TextStyled>{desc}</TextStyled>
                <ProductPriceStyles>{formatPrice(price)}</ProductPriceStyles>
        </CardInfoStyled>
         <QuantityContainerStyles>
            <Increase
                bgColor='var(--gris)'
                onClick={() => dispatch(removeFromCart(id))}
            >
                {quantity === 1 ? <BsFillTrash3Fill/> : <FaMinus />}

            </Increase>
            <Count>{quantity}</Count>
            <Increase onClick={() => dispatch(AddToCart({img, name, desc, price, id, quantity}))}>
                <BsPlusLg />
            </Increase>
            </QuantityContainerStyles>
    </CardContainerStyles>
    
  );
};

export default CardProductCheckout;