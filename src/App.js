import React from "react";
import "./styles/home.scss";
import "./styles/navbar.scss";
import "./styles/banner.scss";
import "./styles/content.scss";
import "./styles/footer.scss";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";
import Solution from "./Pages/solution";
import Product from "./Pages/product";
import Product2 from "./Pages/product2";
import Product3 from "./Pages/product3";
import Development from "./Pages/development";
import Performance from "./Pages/performance";
import Contact from "./Pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/etica-sample">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/development" element={<Development />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
