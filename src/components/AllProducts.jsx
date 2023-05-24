import Product from "./Product";

const AllProducts = ({ products }) => {
  return (
    <div className="productsList">
      <table>
        <thead>
          <tr>
            <th>Naziv proizvoda</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllProducts;
