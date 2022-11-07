import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " activated" : "")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? " activated" : "")}
            >
              cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
