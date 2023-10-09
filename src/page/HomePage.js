
import { useSelector } from "react-redux";
import ListAllInvoices from "../components/ListAllInvoices";

const HomePage = () => {
  // getting all invoices from redux store
  const invoices = useSelector((state) => state.invoices);

  return (
    <div className="d-flex m-4 justify-content-center shadow-lg custom-scroll ">
      <ListAllInvoices
        data={invoices}
      />
    </div>
  );
};

export default HomePage;
