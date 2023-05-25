import AllProducts from "../components/AllProducts";

const AppProducts = ({
  products,
  handleSearch,
  addQuantity,
  subtractQuantity,
}) => {
  return (
    <div>
      <AllProducts
        products={products}
        handleSearch={handleSearch}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
    </div>
  );
};
export default AppProducts;
