import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./Components/AnimatedRoutes";

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
import "./styles/processBar.scss";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import ScrollToTopButton from "./Components/scrollToTopBtn";
import Loading from "./Components/Loading";

export default function App() {
  return (
    <BrowserRouter basename="/etica-sample">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <AnimatedRoutes />

        <ScrollToTopButton />

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
