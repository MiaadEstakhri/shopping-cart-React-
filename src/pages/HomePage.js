import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCartActions } from "../providers/CartProvider";

const HomePage = () => {
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="container">

        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImage">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                </div>
                <button
                  className="btn primary"
                  onClick={() => addProductHandler(product)}
                >
                  Add to Cart
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
