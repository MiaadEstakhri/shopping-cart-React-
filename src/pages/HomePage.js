import Layout from "../Layout/Layout";
import * as data from "../data";

const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
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
