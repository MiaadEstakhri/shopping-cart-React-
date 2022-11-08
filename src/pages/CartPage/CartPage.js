import Layout from "../../Layout/Layout";
import { useCart, useCartActions } from "../../providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length) {
    return (
      <Layout>
        <main className="container">
          <h2>cart is empty !</h2>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <section className="cartItemCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="cartItemImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div> $ {item.price * item.quantity}</div>
                  <div className="cartBoxBtn">
                    <button className="btn" onClick={() => decHandler(item)}>
                      remove
                    </button>
                    <button className="btn">{item.quantity}</button>
                    <button className="btn" onClick={() => incHandler(item)}>
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummery">
            <h2>Cart Summery</h2>
            <div> $ {total}</div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
