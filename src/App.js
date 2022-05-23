import React from "react";
import "./index.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import AboutUs from "./Pages/aboutUs";
import Solution from "./Pages/solution";
import Product from "./Pages/product";
import Development from "./Pages/development";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/etica-sample">
      <Navbar />

      <AboutUs />

      <Routes>
        <Route exact path="/etica-sample" element={<AboutUs />} />
        <Route path="solution" element={<Solution />} />
        <Route path="product" element={<Product />} />
        <Route path="development" element={<Development />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
