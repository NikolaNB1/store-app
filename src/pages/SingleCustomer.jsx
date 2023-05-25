import { useParams } from "react-router-dom";
import SeeCustomer from "../components/SeeCustomer";

const SingleCustomer = ({ customers }) => {
  const { id } = useParams();
  return <SeeCustomer customer={customers[id]} />;
};
export default SingleCustomer;
