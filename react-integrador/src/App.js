import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categorias/Categorias";
import Products from "./components/Products/Products";

function App() {
  return(
  <>
  <Navbar/>
  <Layout>
    <Hero />
    <Categories />
    <Products />
  </Layout>
  <Footer/>
  </>
  );
}

export default App;
