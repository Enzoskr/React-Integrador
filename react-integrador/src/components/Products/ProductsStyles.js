import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 1200px;
    margin: 0 15px;
    color: var(--text-color-black);
    @media(max-width: 768px){
        
        text-align: center;
    }
`;

export const Productscontainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 15px;
margin-top: 40px;
max-width: 1200px;

`

export const ProductsCard = styled.div`
background: var(--color-cards);
padding: 20px;
width: 250px;
border-radius: 10px;
justify-content: center;
display: flex;
flex-direction: column;
gap: 20px;
img{
    border-radius: 10px;
    height: 280px;
    max-width: 500px;
}
h3{
    font-weight: 400;
    margin: 0;
}p{
    color: var(--ColorLogo1);
    font-size: 12px;

}
@media (max-width: 768px){
    width: 250px;
    text-align: center;

}
`
export const ContainerPrice = styled.div`
display: flex;
justify-content: space-between;
`
export const CardPrice = styled.div`
font-weight: 800;
font-size: 18px;
background: var(--colorLogo1);
`