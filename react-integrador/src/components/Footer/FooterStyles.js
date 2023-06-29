import styled from 'styled-components'

export const FooterContainerStyled = styled.footer`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 0 15px auto;
margin-top: 40px;
border-top: 3px solid var(--lines);
gap: 20px;
padding: 40px;

`
export const FooterInnerText = styled.p`
display: flex;
flex-direction: column;
font-size: 18px;
font-weight: 400;
line-height: 1.5;
max-width: 33%;
img{
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
    height: 200px;
    padding: 20px 0;
}

`
export const FooterHelpStyled = styled.div`
display: flex;
flex-direction: row;
gap: 20px;

`
export const FooterUlStyled = styled.ul`
font-size: 18px;
font-weight: 600;
line-height: 1.5;
border-left: 3px solid var(--lines);

`
export const FooterLiStyled = styled.li`
    font-size: 14px;
    font-weight: 400;
    line-height: 2rem;
    cursor: pointer;
    
`

