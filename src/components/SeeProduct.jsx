import { Link } from "react-router-dom";

const SeeProduct = ({
  product,
  customers,
  subtractQuantity,
  index,
  addToCart,
}) => {
  const handleConfirm = () => {
    const selectElement = document.querySelector("select");
    const selectedCustomer = selectElement.value;

    if (selectedCustomer === "Izaberi kupca") {
      alert("Molimo vas da izaberete kupca.");
    } else {
      const [firstName, lastName] = selectedCustomer.split(" ");
      addToCart(firstName, lastName, product, 1);
      subtractQuantity(index);
      alert(`Proizvod ${product.name} prodat kupcu ${selectedCustomer}`);
    }
  };

  return (
    <div className="productsList">
      <table>
        <thead>
          <tr>
            <th>Naziv proizvoda</th>
            <th>Kolicina</th>
            <th>Kupac</th>
            <th>Potvrdi</th>
            <th>Odustani</th>
          </tr>
        </thead>
        <tbody>
          {product.quantity > 0 ? (
            <tr>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <select>
                  <option defaultValue>Izaberi kupca</option>
                  {customers.map((customer, index) => (
                    <option key={index}>
                      {customer.firstName + " " + customer.lastName}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button className="btn btn-success" onClick={handleConfirm}>
                  Confirm
                </button>
              </td>
              <td>
                <Link to="/products" className="btn btn-outline-warning">
                  Cancel
                </Link>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4">Proizvod nije dostupan</td>
              <td>
                <Link to="/products" className="btn btn-outline-warning">
                  Back
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default SeeProduct;
