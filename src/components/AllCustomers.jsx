import Customer from "./Customer";

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
            <Customer
              key={index}
              customer={customer}
              index={index}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllCustomers;
