import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { IoAdd, IoHome } from "react-icons/io5";
import { resetInvoice } from "../features/invoices/copyinvoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { deleteAllInvoices, undoDeleteAllInvoices } from "../features/invoices/invoicesSlice";
import DeleteConfirmModal from "./DeleteConfirmModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUndo, setShowUndo] = useState(false);
  let invoices;
  const handleCreateInvoice = () => {
    dispatch(resetInvoice());
    history.push("/createInvoice");
  };
  useEffect(() => {
    if (location.pathname === "/editInvoice") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [location])

  

  const handle30sectimeOut = () => {
    setTimeout(() => {
      setShowUndo(false);
    }, 5000);
  }

  const handleDeleteConfirm = () => {
    dispatch(deleteAllInvoices());
    setShowModal(false);
    setShowUndo(true);
    handle30sectimeOut();


  }
  const handleUndo = () => {
    console.log(invoices)
    dispatch(undoDeleteAllInvoices());

    setShowUndo(false);
  }
  const handleDeleteAllInvoices = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

    return (
      <div className="d-flex p-2 p-sm-1 bg-primary vw-100 align-items-center justify-content-center">
        <div className="w-75 w-sm-100 d-flex align-items-center ">
          <div className="my-2 flex-grow-1 fs-2 fs-sm-6 fw-bold fw-sm-medium text-light">
            Invoices
          </div>
          <div className="d-flex mx-2 p-2">
            <Link
              to="/"
              className="align-items-center d-flex text-decoration-none border border-info px-2 rounded rounded-4 mx-2"
            >
              <IoHome size={16} className="mx-1 text-white" />
              <div className="text-light fs-4 d-none d-lg-block fw-semibold">
                Home
              </div>
            </Link>
            <button
              // to="/createInvoice"
              className={`align-items-center d-flex text-decoration-none bg-primary border border-info px-2 rounded rounded-4 ${buttonDisabled ? "bg-info": ""}`}
              onClick={() => handleCreateInvoice()}
              disabled={buttonDisabled}
            >
              <IoAdd
                size={16}
                className="mx-1 text-white fw-semibol d-none d-lg-block"
              />
              <div className="text-light fs-6 fs-lg-4 fw-lg-semibold  fw-medium">Create Invoice</div>
            </button>
            <button onClick={handleDeleteAllInvoices}>Delete All Invoices</button>
            <button onClick={handleUndo} className={`${showUndo ? "d-flex" : "d-none"}`}>Undo</button>
          </div>
          <DeleteConfirmModal show={showModal} handleClose={handleCloseModal} handleDeleteConfirm={handleDeleteConfirm} />
        </div>
      </div>
    );
};

export default Navbar;
