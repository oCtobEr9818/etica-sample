import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const handleMenuExpanded = () => setIsExpanded(false);
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <NavLink to={navs.home.path} className="navbar-brand">
        <img
          className="navbar-logo"
          src={imgHandler("/img/logo.png")}
          alt="明曜科技,ETICA BATTERY,Etica Battery,ETICA,etica battery."
        />
      </NavLink>
      <div className="navbar-line"></div>
      {/* 768px以下選控制 */}{" "}
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
        <li>
          <button onClick={handleMenuExpanded}>
            {t(navs.energyStorageSystem.name)}
          </button>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <Link to="/solution">
                  <h3>{t("解決方案")}</h3>
                </Link>
              </li>
              <li>
                <Link to="/solution-commercial-facility#commercial-facility">
                  {t("電力設施")}
                </Link>
              </li>
              <li>
                <Link to="/solution-transportation-application#transportation-application">
                  {t("交通應用")}
                </Link>
              </li>
              <li>
                <Link to="/solution-public-house#public-house">
                  {t("公設住宅")}
                </Link>
              </li>
              <li>
                <Link to="/solution-industry-application#industry-application">
                  {t("工業應用")}
                </Link>
              </li>
              <li>
                <Link to="/solution-greenEnergy-industry#greenEnergy-industry">
                  {t("光儲整合")}
                </Link>
              </li>
              <li>
                <Link to="/product-ESS#Etica+C">
                  <h3>{t("產品資訊")}</h3>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 工控裝置 */}
        <li>
          <Link to={navs.industryBattery.path} onClick={handleMenuExpanded}>
            {t(navs.industryBattery.name)}
          </Link>
        </li>
        {/* e-bike */}
        <li>
          <Link to={navs.eBike.path} onClick={handleMenuExpanded}>
            {t(navs.eBike.name)}
          </Link>
        </li>
        {/* 維運管理 */}
        <li>
          <Link
            to={navs.maintenanceManagement.path}
            onClick={handleMenuExpanded}
          >
            {t(navs.maintenanceManagement.name)}
          </Link>
        </li>
        {/* 技術研發 */}
        <li>
          <Link to={navs.development.path} onClick={handleMenuExpanded}>
            {t(navs.development.name)}
          </Link>
        </li>
        {/* 關於明曜 */}
        <li>
          <Link to={navs.aboutus.path} onClick={handleMenuExpanded}>
            {t(navs.aboutus.name)}
          </Link>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <Link to="/aboutus#introduction">{t("公司簡介")}</Link>
              </li>
              <li>
                <Link to="/aboutus#history">{t("企業沿革")}</Link>
              </li>
              <li>
                <Link to="/aboutus#business">{t("經營理念")}</Link>
              </li>
              <li>
                <Link to="/aboutus#feature">{t("未來展望")}</Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 聯絡我們 */}
        <li>
          <Link to={navs.contact.path} onClick={handleMenuExpanded}>
            {t(navs.contact.name)}
          </Link>
        </li>
        <li>
          <button>{t(navs.langOption.name)}</button>
        </li>
      </ul>
      <SwitchLanguage />
    </div>
  );
};

export default Navbar;
