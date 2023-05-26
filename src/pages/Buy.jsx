import { useParams } from "react-router-dom";
import SeeProduct from "../components/SeeProduct";

const Buy = ({ products, customers, subtractQuantity, addToCart }) => {
  const { id } = useParams();
  const productIndex = parseInt(id);
  return (
    <SeeProduct
      product={products[productIndex]}
      customers={customers}
      subtractQuantity={subtractQuantity}
      index={productIndex}
      addToCart={addToCart}
    />
  );
};
export default Buy;
