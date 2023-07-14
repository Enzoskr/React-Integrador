import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {AiOutlineShopping} from 'react-icons/ai'


import LogoBranding from '../../assets/Logo.png'


import {
    CartNavStyled,
  LinkContainerStyled,
   LinksContainerStyled,
   NavbarContainerStyled,
   SearchIcon,
   
   
   
   
  } from './NavbarStyles'

  import ListNavbar from './ListNavbar/ListNavbar'
  import ModalCart from './Cart/ModalCart'
  import CartIcon from './CartIcon/CartIcon';
import Search from './Search/Search';


 function Navbar() {
const [hiddenCart, setHiddenCart] = useState(true);


  return (
    <NavbarContainerStyled>
      <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />
      
      <ListNavbar/>
      <Link to='/'>
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
      {/* {cualquier cosa que pase lo limpio} */}
      {/* <LogoContainer src={LogoBranding} alt="Logo-marca" /> */}
    
      <LinksContainerStyled>
      <Search/>


      
      <CartNavStyled>
        <CartIcon hiddenCart={hiddenCart} setHiddenCart={setHiddenCart}/>
      </CartNavStyled>

    

      </LinksContainerStyled>
      
    </NavbarContainerStyled>
    

  );
}

export default Navbar;