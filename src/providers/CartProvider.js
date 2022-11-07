import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();
const CartContextDispatch = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatch.Provider value={dispatch}>
        {children}
      </CartContextDispatch.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatch);
