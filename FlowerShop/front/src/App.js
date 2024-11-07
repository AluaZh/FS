import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Arcane from './pages/Arcane';

import ScrollToTop from "./utils/scrollToTop";




function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/arcane" element={<Arcane />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
