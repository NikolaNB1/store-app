import { Link } from "react-router-dom";

const AllCustomers = ({ customers, onRemove }) => {
  return (
    <div className="customersList">
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Datum rodjenja</th>
            <th>Poslednje kupovine</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.dateOfBirth}</td>
              <td>
                <Link
                  to={`/customers/${index}`}
                  className="btn btn-outline-success"
                >
                  Pogledaj
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onRemove(customer.firstName)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllCustomers;
