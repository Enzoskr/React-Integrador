import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #ffffff;
    --colorLogo1; #6699CC;
    --colorLogo2; #FF9900;
    --color-secundario:;

    /* colores blancos y negros */
    --blanco: #;
    --Gris:#e0e1dd;

}
html{
    scroll-behavior: smooth;
   background-color: var(--primary-color);
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

`