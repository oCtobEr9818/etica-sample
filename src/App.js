import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/navbar.scss";
import "./styles/banner.scss";
import "./styles/content.scss";
import "./styles/home.scss";
import "./styles/solution.scss";
import "./styles/product.scss";
import "./styles/maintenanceManagement.scss";
import "./styles/development.scss";
import "./styles/aboutUs.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import ScrollToTopButton from "./Components/scrollToTopBtn";
import SwitchLanguage from "./Components/translation";

import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";
import Solution from "./Pages/solution";
import CommercialFacility from "./Pages/solution_commercial_facility";
import TransportationApplication from "./Pages/solution_transportation_application";
import PublicHouse from "./Pages/solution_public_house";
import IndustryApplication from "./Pages/solution_industry_application";
import GreenEnergyIndustry from "./Pages/solution_greenEnergy_industry";
import ProductESS from "./Pages/product_ESS";
import ProductEbike from "./Pages/product_ebike";
import ProductIndustrialBattery from "./Pages/product_industrial_battery";
import Development from "./Pages/development";
import MaintenanceManagement from "./Pages/maintenanceManagement";
import Contact from "./Pages/contact";

export default function App() {
  return (
    <BrowserRouter basename="/etica-sample">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <SwitchLanguage />

        <Routes>
          {/* 首頁 */}
          <Route exact path="/" element={<Home />} />

          {/* 解決方案 */}
          <Route path="/solution" element={<Solution />} />
          <Route
            path="/solution-commercial-facility"
            element={<CommercialFacility />}
          />
          <Route
            path="/solution-transportation-application"
            element={<TransportationApplication />}
          />
          <Route
            path="/solution-greenEnergy-industry"
            element={<GreenEnergyIndustry />}
          />
          <Route path="/solution-public-house" element={<PublicHouse />} />
          <Route
            path="/solution-industry-application"
            element={<IndustryApplication />}
          />
          {/* 產品資訊 */}
          <Route path="/product-ESS" element={<ProductESS />} />
          {/* 工控裝置 */}
          <Route
            path="/product-industrial-battery"
            element={<ProductIndustrialBattery />}
          />
          {/* e-bike */}
          <Route path="/product-ebike" element={<ProductEbike />} />
          {/* 維運管理 */}
          <Route
            path="/maintenance-management"
            element={<MaintenanceManagement />}
          />
          {/* 研發 */}
          <Route path="/development" element={<Development />} />
          {/* 關於明曜 */}
          <Route path="/aboutus" element={<AboutUs />} />
          {/* 聯絡我們 */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
