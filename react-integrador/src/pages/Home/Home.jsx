import React from "react";
import Hero from '../../components/Hero/Hero'

import Categorias from '../../components/Categorias/Categorias'
import ProductsCard from '../../components/Products/ProductsCard'
import CardsRecommended from "../../components/Recomendados/CardsRecommended";
import LoginContainer  from "../../components/Login/Login";

import {
    HomeWrapper,
    CategoriasWrapper,
    ProductosWrapper,
    RecommendedWrapper,
} from './HomeStyles'


function Home(){
    return(
        <HomeWrapper>

            {/* hero section */}
            
            <Hero />
            {/* section Recommendados */}
            <RecommendedWrapper>
                <h2>Recomendados</h2>
            <CardsRecommended/>

            </RecommendedWrapper>

            {/* sectionCategorias */}
            <CategoriasWrapper>
                <h2>Categorias</h2>

                <Categorias />
            </CategoriasWrapper>
            {/* section Productos */}
            <ProductosWrapper>
                <h2>Nuestros productos</h2>
                 <ProductsCard />
            </ProductosWrapper>

            {/* section login */}
            <LoginContainer>


            </LoginContainer>
            

            
        </HomeWrapper>
    )

}

export default Home;
