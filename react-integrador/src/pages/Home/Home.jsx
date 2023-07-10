import React from "react";

import Categorias from '../../components/Categorias/Categorias'
import ProductsCard from '../../components/Products/ProductsCard'

import Hero from '../../components/Hero/Hero'


import {
    HomeWrapper,
    CategoriasWrapper,
    ProductosWrapper
} from './HomeStyles'

function Home(){
    return(
        <HomeWrapper>

            {/* hero section */}
            
            <Hero />

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
            

            
        </HomeWrapper>
    )

}

export default Home;
