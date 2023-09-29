import { useState } from "react";
import { useSelector } from "react-redux";
import ListAllInvoices from "../components/ListAllInvoices";

const HomePage = ({ editInvoiceData }) => {
  // getting all invoices from redux store
  const invoices = useSelector((state) => state.invoices);

  // function to handle edit invoice data
  const handleEditInvoiceData = (id) => {
    editInvoiceData(invoices.filter((invoice) => invoice.id === id));
  };

  return (
    <div className="d-flex m-4 justify-content-center shadow-lg">
      <ListAllInvoices
        data={invoices}
        handleEditInvoiceData={handleEditInvoiceData}
      />
    </div>
  );
};

export default HomePage;
