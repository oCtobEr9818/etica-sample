import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "關於我們",
    key: 0,
  },
  {
    path: "/solution",
    name: "解決方案",
    key: 1,
  },
  {
    path: "/product",
    name: "產品資訊",
    key: 2,
  },
  {
    path: "/development",
    name: "研發",
    key: 3,
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
      </ul>
    </div>
  );
};

export default Navbar;
