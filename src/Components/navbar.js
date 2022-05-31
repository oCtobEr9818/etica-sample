import { NavLink } from "react-router-dom";

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
      <a href="/etica-sample" className="navbar-brand">
        <img
          className="navbar-logo"
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          alt="明曜科技,ETICA BATTERY,Etica Battery,ETICA,etica battery."
        />
      </a>
      <div className="navbar-line"></div>

      <input type="checkbox" id="menu-control" />
      <label htmlFor="menu-control" className="menu-btn">
        <span></span>
      </label>
      <ul className="navbar-option">
        <li>
          <NavLink to={navs.home.path}>{navs.home.name}</NavLink>
        </li>
        <li>
          <NavLink to={navs.aboutus.path}>{navs.aboutus.name}</NavLink>
          <div className="dropdown">
            <ul className="subNavbar">
              <li>
                <a href="#introduction">公司簡介</a>
              </li>
              <li>
                <a href="#history">企業沿革</a>
              </li>
              <li>
                <a href="#business">經營理念</a>
              </li>
              <li>
                <a href="#feature">未來展望</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={navs.solution.path}>{navs.solution.name}</NavLink>
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
