import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #ffffff;
    --colorLogo1: #6699CC;
    --colorLogo2: #FF9900;
    --color-secundario:1;
    --color-cards: #dee2e6;

    /* colores blancos y negros */
    --text-color-black:#000000;
    --blanco:#fff;
    --Gris:#e0e1dd;
    --lines: #0000001c;

}
html{
    scroll-behavior: smooth;
   background-color: var(--primary-color);
   
}
*{
    /* border: 1px solid red; */
}
body{
    margin: 0;
    padding: 0;
    font-family: "saint-serif";
    overflow-x: hidden;
    
    
}
h1{
    color: black
}

li{
    list-style: none;
}

main h2{
    padding-left: 20px;
    @media (max-width: 768px){
    font-size: 18px;
    padding-left: 10px;
}
}
`