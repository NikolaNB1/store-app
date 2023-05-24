import AllCustomers from "../components/AllCustomers";

const AppCustomers = ({ customers, onRemove }) => {
  return (
    <div>
      <AllCustomers customers={customers} onRemove={onRemove} />
    </div>
  );
};
export default AppCustomers;
