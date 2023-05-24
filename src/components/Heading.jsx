import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addcustomers" className="nav-link">
              Add Customers
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Heading;
