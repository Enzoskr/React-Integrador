import React from 'react'
import { LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled, LogoContainer, ListNavbar, UlNavbar, LiNavbar } from './NavbarStyles'
import {AiOutlineShopping} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import LogoBranding from '../../assets/Logo.png'



const navbar = () => {
  return (
    <NavbarContainerStyled>
      <ListNavbar>
        <UlNavbar>
          <LiNavbar><a> New in</a></LiNavbar>
          <LiNavbar><a> Shop</a></LiNavbar>
          <LiNavbar><a> Contact Us</a></LiNavbar>
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