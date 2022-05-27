import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "首頁",
    key: 0,
  },
  {
    path: "/aboutus",
    name: "關於我們",
    key: 1,
  },
  {
    path: "/solution",
    name: "解決方案",
    key: 2,
  },
  {
    path: "/product",
    name: "產品資訊",
    key: 3,
  },
  {
    path: "/development",
    name: "研發",
    key: 4,
  },
  {
    path: "/performance",
    name: "實績案例",
    key: 5,
  },
  {
    path: "/contact",
    name: "聯絡我們",
    key: 6,
  },
];

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
        {navs.map((navItem) => (
          <li key={navItem.key}>
            <NavLink to={navItem.path}>{navItem.name}</NavLink>
          </li>
        ))}
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
      </ul>
    </div>
  );
};

export default Navbar;
