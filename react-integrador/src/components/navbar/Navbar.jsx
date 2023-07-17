import React from 'react';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import LogoBranding from '../../assets/Logo.png'


import {
    CartNavStyled,
  
   LinksContainerStyled,
   NavbarContainerStyled,
  //  SearchIcon,
   
   
   
   
  } from './NavbarStyles'

  import ListNavbar from './ListNavbar/ListNavbar'
  import ModalCart from './Cart/ModalCart'
  import CartIcon from './CartIcon/CartIcon';
import Search from './Search/Search';


 function Navbar() {



  return (
    <NavbarContainerStyled>
      <ModalCart />
      
      <ListNavbar/>
      <Link to='/'>
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
      {/* {cualquier cosa que pase lo limpio} */}
      {/* <LogoContainer src={LogoBranding} alt="Logo-marca" /> */}
    
      <LinksContainerStyled>
      <Search/>


      
      <CartNavStyled>
        <CartIcon/>
      </CartNavStyled>

      

    

      </LinksContainerStyled>
      
    </NavbarContainerStyled>
    

  );
}

export default Navbar;