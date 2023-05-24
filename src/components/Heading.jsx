const Heading = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/customers" className="nav-link">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">
              Products
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Heading;
