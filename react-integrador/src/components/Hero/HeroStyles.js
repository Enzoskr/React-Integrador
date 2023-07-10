import { styled } from "styled-components";
import PhotoBg from '../../assets/Patagloria.jpg'

export const HeroContainer = styled.section`
display: flex;
justify-content: space-around;
margin: 0 auto;
gap: 20px;
background-image : url(${PhotoBg});
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background-attachment: local;
@media (max-width: 768px){
    flex-direction:column;
}
img{
    width: 100%;
    height: 100%;
    object-fit: contain;

}
`
export const HeroTagline = styled.h1`
font-family: 'Playfair Display', serif;
margin-top: 190PX;
font-size: 90px;
max-width: 1200px;
text-align: center;
font-weight: 700;
color: var(--Gris);
text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
@media (max-width: 768px){
    font-size: 50px;
}
`




