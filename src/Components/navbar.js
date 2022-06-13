import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const navs = {
  home: {
    path: "/",
    name: "首頁",
  },
  aboutus: {
    path: "/aboutus",
    name: "關於我們",
  },
  solution: {
    path: "/solution",
    name: "解決方案",
  },
  product: {
    path: "/product",
    name: "產品資訊",
  },
  development: {
    path: "/development",
    name: "研發",
  },
  performance: {
    path: "/performance",
    name: "實績案例",
  },
  contact: {
    path: "/contact",
    name: "聯絡我們",
  },
};

const Navbar = () => {
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

      <div className="dropMenu">
        <label htmlFor="menu-control" className="menu-btn">
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="menu-control" />

      <ul className="navbar-option">
        <li>
          <NavLink to={navs.home.path}>{navs.home.name}</NavLink>
        </li>
        <li>
          <NavLink to={navs.aboutus.path}>{navs.aboutus.name}</NavLink>
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
          <NavLink to={navs.solution.path}>{navs.solution.name}</NavLink>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <Link to="/solution#commercialFacility">商業設施</Link>
              </li>
              <li>
                <Link to="/solution#trsportationApplication">交通應用</Link>
              </li>
              <li>
                <Link to="/solution#publicHouse">公設住宅</Link>
              </li>
              <li>
                <Link to="/solution#industryApplication">工業應用</Link>
              </li>
              <li>
                <Link to="/solution#greenEnergyIndustry">綠能產業</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={navs.product.path}>{navs.product.name}</NavLink>
        </li>
        <li>
          <NavLink to={navs.development.path}>{navs.development.name}</NavLink>
        </li>
        <li>
          <NavLink to={navs.performance.path}>{navs.performance.name}</NavLink>
        </li>
        <li>
          <NavLink to={navs.contact.path}>{navs.contact.name}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
