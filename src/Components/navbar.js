import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useSpring } from "framer-motion";

import SwitchLanguage from "../Components/translation";
import { imgHandler } from "./imgHandler";

const navs = {
  home: {
    path: "/",
    name: "",
  },
  energyStorageSystem: {
    path: null,
    name: "儲能系統",
  },
  industryBattery: {
    path: "/product-industrial-battery#industry-device",
    name: "工控裝置",
  },
  eBike: {
    path: "/product-ebike#bicycle",
    name: "E-bike",
  },
  maintenanceManagement: {
    path: "/maintenance-management#O&M",
    name: "維運管理",
  },
  development: {
    path: "/development#R&D",
    name: "技術研發",
  },
  aboutus: {
    path: "/aboutus#introduction",
    name: "關於明曜",
  },
  contact: {
    path: "/contact",
    name: "聯絡我們",
  },
  langOption: {
    name: "",
  },
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePage, setActivePage] = useState("");

  // 滾動進度條
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.000001,
  });

  const handleMenuExpanded = (page) => {
    setIsExpanded(false);
    setActivePage(page);
  };
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <NavLink to={navs.home.path} className="navbar-brand">
        <img
          className="navbar-logo"
          src={imgHandler("/img/logo.png")}
          alt="明曜科技,ETICA BATTERY,Etica Battery,ETICA,etica battery."
          onClick={() => handleMenuExpanded("")}
        />
      </NavLink>

      <div className="navbar-line"></div>
      {/* 768px以下選控制 */}
      <div className="dropMenu">
        <label htmlFor="menu-control" className="menu-btn"></label>
      </div>
      <input
        type="checkbox"
        id="menu-control"
        checked={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
      />

      <ul className={`navbar-option ${isExpanded ? "active" : ""}`}>
        {/* 儲能系統 */}
        <li
          onClick={() => handleMenuExpanded("儲能系統")}
          className={activePage === "儲能系統" ? "active" : ""}
        >
          <button>{t(navs.energyStorageSystem.name)}</button>
          <div className="dropdown">
            <ul className="subNavbar">
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution">
                  <h3>{t("解決方案")}</h3>
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution-commercial-facility#commercial-facility">
                  {t("電力設施")}
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution-transportation-application#transportation-application">
                  {t("交通應用")}
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution-public-house#public-house">
                  {t("公設住宅")}
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution-industry-application#industry-application">
                  {t("工業應用")}
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/solution-greenEnergy-industry#greenEnergy-industry">
                  {t("光儲整合")}
                </Link>
              </li>
              <li onClick={() => handleMenuExpanded("儲能系統")}>
                <Link to="/product-ESS#Etica+C">
                  <h3>{t("產品資訊")}</h3>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 工控裝置 */}
        <li className={activePage === "工控裝置" ? "active" : ""}>
          <Link
            to={navs.industryBattery.path}
            onClick={() => handleMenuExpanded("工控裝置")}
          >
            {t(navs.industryBattery.name)}
          </Link>
        </li>
        {/* e-bike */}
        <li className={activePage === "E-bike" ? "active" : ""}>
          <Link
            to={navs.eBike.path}
            onClick={() => handleMenuExpanded("E-bike")}
          >
            {t(navs.eBike.name)}
          </Link>
        </li>
        {/* 維運管理 */}
        <li className={activePage === "維運管理" ? "active" : ""}>
          <Link
            to={navs.maintenanceManagement.path}
            onClick={() => handleMenuExpanded("維運管理")}
          >
            {t(navs.maintenanceManagement.name)}
          </Link>
        </li>
        {/* 技術研發 */}
        <li className={activePage === "技術研發" ? "active" : ""}>
          <Link
            to={navs.development.path}
            onClick={() => handleMenuExpanded("技術研發")}
          >
            {t(navs.development.name)}
          </Link>
        </li>
        {/* 關於明曜 */}
        <li className={activePage === "關於明曜" ? "active" : ""}>
          <Link
            to={navs.aboutus.path}
            onClick={() => handleMenuExpanded("關於明曜")}
          >
            {t(navs.aboutus.name)}
          </Link>
          <div className="dropdown">
            <ul className="subNavbar">
              <li onClick={() => handleMenuExpanded("關於明曜")}>
                <Link to="/aboutus#introduction">{t("公司簡介")}</Link>
              </li>
              <li onClick={() => handleMenuExpanded("關於明曜")}>
                <Link to="/aboutus#history">{t("企業沿革")}</Link>
              </li>
              <li onClick={() => handleMenuExpanded("關於明曜")}>
                <Link to="/aboutus#business">{t("經營理念")}</Link>
              </li>
              <li onClick={() => handleMenuExpanded("關於明曜")}>
                <Link to="/aboutus#feature">{t("未來展望")}</Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 聯絡我們 */}
        <li className={activePage === "聯絡我們" ? "active" : ""}>
          <Link
            to={navs.contact.path}
            onClick={() => handleMenuExpanded("聯絡我們")}
          >
            {t(navs.contact.name)}
          </Link>
        </li>
        <li>
          <button>{t(navs.langOption.name)}</button>
        </li>
      </ul>
      <SwitchLanguage />

      {/* 滾動進度條 */}
      <motion.div
        className="processBar"
        style={{ scaleX: scaleX }}
      ></motion.div>
    </div>
  );
};

export default Navbar;
