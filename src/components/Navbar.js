import React from "react";
import { Link } from "react-router-dom";
import { IoAdd, IoHome } from "react-icons/io5";
const Navbar = () => {
    return (
      <div className="d-flex p-2 bg-primary vw-100 align-items-center justify-content-center">
        <div className="w-75 d-flex align-items-center ">
          <div className="my-2 flex-grow-1 fs-2 fw-bold text-light">
            Invoices
          </div>
          <div className="d-flex mx-2 p-2">
            <Link
              to="/"
              className="align-items-center d-flex text-decoration-none border border-info px-2 rounded rounded-4 mx-2"
            >
              <IoHome size={16} className="mx-1 text-white" />
              <div className="text-light fs-4 fw-semibold">Home</div>
            </Link>
            <Link
              to="/createInvoice"
              className="align-items-center d-flex text-decoration-none border border-info px-2 rounded rounded-4"
            >
              <IoAdd size={16} className="mx-1 text-white" />
              <div className="text-light fs-4 fw-semibold">Create Invoice</div>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
