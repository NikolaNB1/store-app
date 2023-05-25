import AllProducts from "../components/AllProducts";

const AppProducts = ({ products, handleSearch }) => {
  return (
    <div>
      <AllProducts products={products} handleSearch={handleSearch} />
    </div>
  );
};
export default AppProducts;
