import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout";

function App() {
  return(
  <>
  <Navbar/>
  <Layout>
    <Hero />
  </Layout>
  </>
  );
}

export default App;
