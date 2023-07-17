import React from 'react';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


import LogoBranding from '../../assets/Logo.png'


import {
    CartNavStyled,
  
   LinksContainerStyled,
   NavbarContainerStyled,
   SpanStyled,
   UserContainerStyled,
   UserNavStyled,
  //  SearchIcon,
   
   
   
   
  } from './NavbarStyles'

  import ListNavbar from './ListNavbar/ListNavbar'
  import ModalCart from './Cart/ModalCart'
  import CartIcon from './CartIcon/CartIcon';
import Search from './Search/Search';


 function Navbar() {
  
  const navigate = useNavigate(); 
  return (
    <NavbarContainerStyled>
      
      
      <ListNavbar/>
      <Link to= '/' >
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
      {/* {cualquier cosa que pase lo limpio} */}
      {/* <LogoContainer src={LogoBranding} alt="Logo-marca" /> */}
    
      <LinksContainerStyled>
       <UserNavStyled>
        <UserContainerStyled onClick={() => navigate('/register')} >
          <SpanStyled>Inicia Sesion</SpanStyled>
        </UserContainerStyled>
      </UserNavStyled>


      
      <CartNavStyled>
        <CartIcon/>
      </CartNavStyled>
      </LinksContainerStyled>
      
    </NavbarContainerStyled>
    

  );
}

export default Navbar;