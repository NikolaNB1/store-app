import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import AddCustomer from "./pages/AddCustomer";
import SingleCustomer from "./pages/SingleCustomer";

const listOfProducts = [
  {
    name: "Hleb",
    quantity: 0,
  },
  {
    name: "Mleko",
    quantity: 0,
  },
  {
    name: "Jaja",
    quantity: 0,
  },
  {
    name: "Banane",
    quantity: 0,
  },
];

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
  const [products, setProducts] = useState(listOfProducts);
  const [productsCopy, setProductsCopy] = useState(listOfProducts);

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

  const handleSearch = (event, search) => {
    event.preventDefault();
    setProducts(
      productsCopy.filter((product) => product.name.includes(search))
    );
  };

  const addQuantity = (index) => {
    setProducts((prevState) => {
      const updatedProducts = prevState.map((product, id) => {
        if (id === index) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return updatedProducts;
    });

    setProductsCopy((prevState) => {
      const updatedProductsCopy = prevState.map((product, id) => {
        if (id === index) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return updatedProductsCopy;
    });
  };

  const subtractQuantity = (index) => {
    setProducts((prevState) => {
      const updatedProducts = prevState.map((product, id) => {
        if (product.quantity === 0) {
          return product;
        }
        if (id === index) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      return updatedProducts;
    });

    setProductsCopy((prevState) => {
      const updatedProductsCopy = prevState.map((product, id) => {
        if (product.quantity === 0) {
          return product;
        }
        if (id === index) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      return updatedProductsCopy;
    });
  };

  return (
    <Routes>
      <Route
        path="/customers"
        element={<AppCustomers customers={customers} onRemove={onRemove} />}
      ></Route>
      <Route
        path="/products"
        element={
          <AppProducts
            products={products}
            handleSearch={handleSearch}
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
          />
        }
      ></Route>
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
