import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CollectionBanner from "./components/CollectionBanner";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <CollectionBanner />
        <Benefits />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
