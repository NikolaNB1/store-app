import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

function App() {
  return (
    <Routes>
      <Route path="customers" element={<AppCustomers />}></Route>
      <Route path="products" element={<AppProducts />}></Route>
    </Routes>
  );
}

export default App;
