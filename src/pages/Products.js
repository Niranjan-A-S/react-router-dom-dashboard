import { Link } from "react-router-dom";
import { products } from "../data";

export const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products">
          {products.map((product) => (
            <article key={product.id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${product.id}`}>Details</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
