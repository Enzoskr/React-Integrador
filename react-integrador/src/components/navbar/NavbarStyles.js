import React from 'react'
import styled from 'styled-components'

// header y todo lo que contiene el header
export const  NavbarContainerStyled = styled.header`
 position: fixed; /* Agrega esta línea */
/* Ajusta la posición superior según tus necesidades */
width: 100%; /* Ajusta el ancho según tus necesidades */
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.12);

font-size: 14px;

`
// contenedor de los icons y sus palabras
export const LinksContainerStyled = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: center;

/* gap: 20px; */
a{
    padding: 0px 10px;
    cursor: pointer;
    color: black;
    
}
a:hover{
    text-decoration: 10px underline var(--colorLogo1)
}
a:first-child{
    text-decoration: underline 1px var(--colorLogo1);
    display: flex;
    align-items: center;
    gap: 5px;

}

`
// imagen
export const LogoContainer = styled.img`
align-items: center;
width: 150px;
height: auto;
cursor: pointer;
`

export const LinkContainerStyled = styled.div`
font-size:14px;
color: ${(props) => (props.icons ? 'black' : 'lightblue')};
align-items: center;

`

export const UserContainerStyled = styled(LinkContainerStyled)`
display: flex;
`

export const ContainerStyled = styled(LinkContainerStyled)`
display: flex;

@media(max-width: 768px){
    display: none;
}`

export const MenuContainerStyled = styled( LinkContainerStyled)`
display: none;
cursor: pointer;
@media(max-width: 768px ){
    display: flex;

}
`
export const ListNavbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



`


export const UlNavbar = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;
padding-left: none;
list-style: none;
a{
    cursor: pointer;
}
a:hover{
    text-decoration: underline 1.5px solid gray;
    
}
`