import React from "react";

import Routes from './routes/Routes'

import Navbar from "./components/navbar/Navbar";
// import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
// import Categories from "./components/Categorias/Categorias";
// import Products from "./components/Products/Products";

function App() {
  return(
  <>
  <Layout>
    <Navbar/>
    {/* <Hero />
    <Categories />
    <Products /> */}
    <Routes />
  </Layout>
  <Footer/>
  </>
  );
}

export default App;
