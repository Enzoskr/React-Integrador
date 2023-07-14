import { styled } from "styled-components";

export const CardsContainer = styled.div`
display: grid;
gap: 20px;
padding: 1rem;
grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
overflow:  scroll;


&::-webkit-scrollbar{
    height: 4px;
    width: 4px;
}
`

export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
padding: 0 10px;
border-radius: 1rem;
background-color: antiquewhite;
transition: all 0.3s ease-in-out;
width: 420px;
height: 100px;

&:hover img{
    padding: none;
    transform: scale(1.1);

}
`

export const CardImg = styled.img`
width: 70px;
height: 70px;
border-radius: 0.5rem;
object-fit: cover;
transition: all 0.3s ease-in-out;



`
export const CardTitle = styled.h3`
margin: 0;
margin-bottom: 5px;
font-size: 18px;
font-weight: 500;
letter-spacing: 0.05rem;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 200px;
:hover{
    
  white-space: normal;
  text-overflow: initial;

}
 
`

export const CardText = styled.p`
margin: 0;
margin-bottom: 5px;
font-weight: 500;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 100%;

`

export const CardPrice = styled.span`
font-weight: 700;
font-size: 16px;
color: var(--colorLogo1);
text-shadow: 1px 1px 1px #fff ;


`
export const InfoCard = styled.p`
margin: 0;
margin-bottom: 5px;
font-weight: 700;

`