import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const navs = {
  home: {
    path: "/",
    name: "",
  },
  energyStorageSystem: {
    path: "",
    name: "儲能系統",
  },
  industryBattery: {
    path: "/industry-battery",
    name: "工控裝置",
  },
  eBike: {
    path: "/E-bike",
    name: "E-bike",
  },
  maintenanceManagement: {
    path: "/maintenance-management",
    name: "維運管理",
  },
  development: {
    path: "/development",
    name: "技術研發",
  },
  aboutus: {
    path: "/aboutus",
    name: "關於明曜",
  },
  contact: {
    path: "/contact",
    name: "聯絡我們",
  },
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleMenuExpanded = () => setIsExpanded(false);

  return (
    <div className="navbar">
      <NavLink to={navs.home.path} className="navbar-brand">
        <img
          className="navbar-logo"
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          alt="明曜科技,ETICA BATTERY,Etica Battery,ETICA,etica battery."
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
        <li>
          <NavLink
            to={navs.energyStorageSystem.path}
            onClick={handleMenuExpanded}
          >
            {navs.energyStorageSystem.name}
          </NavLink>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <Link to="/solution_commercial_facility#commercial-facility">
                  電力設施
                </Link>
              </li>
              <li>
                <Link to="/solution_transportation_application#transportation-application">
                  交通應用
                </Link>
              </li>
              <li>
                <Link to="/solution_public_house#public-house">公設住宅</Link>
              </li>
              <li>
                <Link to="/solution_industry_application#industry-application">
                  工業應用
                </Link>
              </li>
              <li>
                <Link to="/solution_greenEnergy_industry#greenEnergy-industry">
                  綠能產業
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={navs.industryBattery.path} onClick={handleMenuExpanded}>
            {navs.industryBattery.name}
          </NavLink>
        </li>
        <li>
          <NavLink to={navs.eBike.path} onClick={handleMenuExpanded}>
            {navs.eBike.name}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={navs.maintenanceManagement.path}
            onClick={handleMenuExpanded}
          >
            {navs.maintenanceManagement.name}
          </NavLink>
        </li>
        <li>
          <NavLink to={navs.development.path} onClick={handleMenuExpanded}>
            {navs.development.name}
          </NavLink>
        </li>
        <li>
          <NavLink to={navs.aboutus.path} onClick={handleMenuExpanded}>
            {navs.aboutus.name}
          </NavLink>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <Link to="/aboutus#introduction">公司簡介</Link>
              </li>
              <li>
                <Link to="/aboutus#history">企業沿革</Link>
              </li>
              <li>
                <Link to="/aboutus#business">經營理念</Link>
              </li>
              <li>
                <Link to="/aboutus#feature">未來展望</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={navs.contact.path} onClick={handleMenuExpanded}>
            {navs.contact.name}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
