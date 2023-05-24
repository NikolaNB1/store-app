import { Link } from "react-router-dom";

const Customer = ({ customer, index, onRemove }) => {
  return (
    <tr key={index}>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.dateOfBirth}</td>
      <td>
        <Link to={`/customers/${index}`}>Pogledaj</Link>
      </td>
      <td>
        <button onClick={() => onRemove(customer.firstName)}>Remove</button>
      </td>
    </tr>
  );
};
export default Customer;
