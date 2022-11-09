import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CartProvider from "./providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkOut" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
