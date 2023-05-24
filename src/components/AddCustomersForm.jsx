import { useState } from "react";
import { Link } from "react-router-dom";

const AddCustomersForm = ({ handleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };
  return (
    <div className="customersForm">
      <form>
        <ul>
          <li>
            Ime:
            <p>
              <input
                placeholder="Unesite ime"
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </p>
          </li>
          <li>
            Prezime:
            <p>
              <input
                placeholder="Unesite prezime"
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </p>
          </li>
          <li>
            Datum rodjenja:
            <p>
              <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDateChange}
              />
            </p>
          </li>
          <li>
            <button
              type="submit"
              onClick={(event) =>
                handleSubmit(event, firstName, lastName, dateOfBirth)
              }
            >
              <Link to="/customers">Add Customer</Link>
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
export default AddCustomersForm;
