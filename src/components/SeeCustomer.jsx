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
    </div>
  );
};
export default SeeCustomer;
