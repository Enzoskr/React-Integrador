import React from 'react'
import { LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled, LogoContainer, ListNavbar, UlNavbar } from './NavbarStyles'
import {AiOutlineShopping} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import LogoBranding from '../../assets/Logo.png'



const navbar = () => {
  return (
    <NavbarContainerStyled>
      <ListNavbar>
        <UlNavbar>
          <li><a> New in</a></li>
          <li><a> Shop</a></li>
          <li><a> Contact Us</a></li>
        </UlNavbar>
      </ListNavbar>
      
       <LogoContainer src={LogoBranding} alt="Logo-marca" />
    
      <LinksContainerStyled>
        <a href="#">
        <LinkContainerStyled icons>
        <AiOutlineShopping/>
        </LinkContainerStyled>
        <p>Cart</p>
      </a>
      <LinkContainerStyled>
      <a href="#">
        <AiOutlineSearch/>
        <p>Search </p>
        </a>
        </LinkContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>

  )
}

export default navbar