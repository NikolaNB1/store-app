import { useState } from "react";

const AllProducts = ({ products, handleSearch }) => {
  const [state, setState] = useState({
    search: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="search">
        <form className="d-flex mt-3" role="search">
          <input
            name="search"
            className="form-control me-2"
            type="search"
            placeholder="Search Products"
            aria-label="Search"
            value={state.search}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(e) => handleSearch(e, state.search)}
          >
            Search
          </button>
        </form>
      </div>
      <div className="productsList">
        <table>
          <thead>
            <tr>
              <th>Naziv proizvoda</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllProducts;
