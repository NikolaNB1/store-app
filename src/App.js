import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import AddCustomer from "./pages/AddCustomer";
import SingleCustomer from "./components/SingleCustomer";

const listOfCustomers = [
  {
    firstName: "Nikola",
    lastName: "Babic",
    dateOfBirth: new Date().toDateString(),
  },
  {
    firstName: "Marko",
    lastName: "Babic",
    dateOfBirth: new Date().toDateString(),
  },
  {
    firstName: "Ivan",
    lastName: "Babic",
    dateOfBirth: new Date().toDateString(),
  },
  {
    firstName: "Petar",
    lastName: "Babic",
    dateOfBirth: new Date().toDateString(),
  },
];

function App() {
  const [customers, setCustomers] = useState(listOfCustomers);

  const onRemove = (firstName) => {
    setCustomers((prevState) =>
      prevState.filter((customer) => customer.firstName !== firstName)
    );
  };

  const handleSubmit = (event, firstName, lastName, dateOfBirth) => {
    event.preventDefault();

    let newCustomer = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
    };

    setCustomers((prevState) => [...prevState, newCustomer]);
  };

  return (
    <Routes>
      <Route
        path="/customers"
        element={<AppCustomers customers={customers} onRemove={onRemove} />}
      ></Route>
      <Route path="/products" element={<AppProducts />}></Route>
      <Route
        path="/addcustomers"
        element={<AddCustomer handleSubmit={handleSubmit} />}
      ></Route>
      <Route
        path="/customers/:id"
        element={<SingleCustomer customers={customers} />}
      ></Route>
    </Routes>
  );
}

export default App;
