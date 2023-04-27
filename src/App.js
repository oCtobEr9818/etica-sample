import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/navbar.scss";
import "./styles/banner.scss";
import "./styles/content.scss";
import "./styles/home.scss";
import "./styles/aboutUs.scss";
import "./styles/solution.scss";
import "./styles/product.scss";
import "./styles/development.scss";
import "./styles/performance.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";

import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";
import Solution from "./Pages/solution";
import CommercialFacility from "./Pages/solution_commercial_facility";
import TransportationApplication from "./Pages/solution_transportation_application";
import PublicHouse from "./Pages/solution_public_house";
import IndustryApplication from "./Pages/solution_industry_application";
import GreenEnergyIndustry from "./Pages/solution_greenEnergy_industry";
import Product from "./Pages/product";
import ProductESS from "./Pages/product_ESS";
import ProductEbike from "./Pages/product_ebike";
import ProductIndustrialBattery from "./Pages/product_industrial_battery";
import Development from "./Pages/development";
import Performance from "./Pages/performance";
import Contact from "./Pages/contact";
import Footer from "./Components/footer";

export default function App() {
  return (
    <BrowserRouter basename="/etica-sample">
      <Navbar />

      <Routes>
        {/* 首頁 */}
        <Route exact path="/" element={<Home />} />

        {/* 關於我們 */}
        <Route path="/aboutus" element={<AboutUs />} />

        {/* 解決方案 */}
        <Route path="/solution" element={<Solution />} />
        <Route
          path="/solution_commercial_facility"
          element={<CommercialFacility />}
        />
        <Route
          path="/solution_transportation_application"
          element={<TransportationApplication />}
        />
        <Route
          path="/solution_greenEnergy_industry"
          element={<GreenEnergyIndustry />}
        />
        <Route path="/solution_public_house" element={<PublicHouse />} />
        <Route
          path="/solution_industry_application"
          element={<IndustryApplication />}
        />

        {/* 產品資訊 */}
        <Route path="/product" element={<Product />} />
        <Route path="/product_ESS" element={<ProductESS />} />
        <Route path="/product_ebike" element={<ProductEbike />} />
        <Route
          path="/product_industrial_battery"
          element={<ProductIndustrialBattery />}
        />

        {/* 研發 */}
        <Route path="/development" element={<Development />} />
        {/* 實績案例 */}
        <Route path="/performance" element={<Performance />} />
        {/* 聯絡我們 */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
