const SeeCustomer = ({ customer }) => {
  return (
    <div className="seeCustomer">
      <ul>
        <li>
          Ime: <h2>{customer.firstName}</h2>
        </li>
        <li>
          Prezime: <h2>{customer.lastName}</h2>
        </li>
        <li>
          Datum rodjenja: <h2>{customer.dateOfBirth}</h2>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Naziv proizvoda</th>
            <th>Kolicina</th>
          </tr>
        </thead>
        <tbody>
          {customer.cart.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SeeCustomer;
