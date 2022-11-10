import { Link, useParams } from "react-router-dom";
import { products } from "../data";

export const SingleProduct = () => {
  const { productID } = useParams();

  const { name, image } = products.find(({ id }) => id === productID);

  return (
    <section className="section product">
      <img src={image} alt={image} />
      <h4>{name}</h4>
      <Link to="/products" className="btn">
        Go back to products
      </Link>
    </section>
  );
};
