import Layout from "../../Layout/Layout";
import { useCart } from "../../providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart } = useCart();

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
                  <div>{item.price * item.quantity}</div>
                  <div className="cartBoxBtn">
                    <button className="btn">remove</button>
                    <button className="btn">{item.quantity}</button>
                    <button className="btn">Add</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummery">cart summery</section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
