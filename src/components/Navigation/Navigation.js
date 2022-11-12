import { NavLink } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header className="mainNavigation">
      <nav>
        <div>
          <ul>
            <li>Shopping</li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? " activated" : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="cartLink">
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? " activated" : "")}
              >
                Cart
              </NavLink>
              <span>{cart.length}</span>
            </li>
            <li>
              <NavLink
                to={userData ? "/profile" : "/login"}
                className={({ isActive }) => (isActive ? " activated" : "")}
              >
                {userData ? "profile" : "Login /Signup"}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
