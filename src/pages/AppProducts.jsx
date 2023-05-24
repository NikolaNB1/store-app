import AllProducts from "../components/AllProducts";

const AppProducts = ({ products }) => {
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};
export default AppProducts;
