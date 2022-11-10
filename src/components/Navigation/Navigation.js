import { NavLink } from "react-router-dom";
import { useCart } from "../../providers/CartProvider";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " activated" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? " activated" : "")}
            >
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
