import { Link } from "react-router-dom";
import { useAuth, useAuthAction } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import "./checkout.css";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">go to shopping ?</Link>
      </main>
    );
  return (
    <main className="container">
      <section className="checkoutCenter">
        {auth ? (
          <>
            <div className="checkoutItemList">
              <h3>Checkout detail</h3>
              <p>Name : {auth.data.name}</p>
              <p>Email : {auth.data.email}</p>
              <p>Phone Number : {auth.data.phoneNumber}</p>
            </div>
            <div className="checkoutSummery">
              {cart &&
                cart.map((c) => {
                  return (
                    <div key={c.id}>
                      div {c.name} * {c.quantity} : {c.quantity * c.offPrice} $
                    </div>
                  );
                })}
              <hr />
              <div>{total} $</div>
            </div>
          </>
        ) : (
          <h4>please login !</h4>
        )}
      </section>
    </main>
  );
};

export default Checkout;
