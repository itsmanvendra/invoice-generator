import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { copyInvoice } from "../features/invoices/copyinvoiceSlice";


function CopyFromExistingModal({
  show,
  handleClose,
  handleImportDatafromExisting,
}) {
  // getting all invoices from redux store
  const invoices = useSelector((state) => state.invoices);
  // dispatching copyInvoice action
  const dispatch = useDispatch();

  const handleCopyfromExisting = (item) => {
    dispatch(copyInvoice(item));
    handleImportDatafromExisting(item);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Select Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="fs-6">
            {invoices.length > 0
              ? invoices.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex border-bottom border-primary pt-2 w-100 justify-content-between align-items-center px-4 invoiceItemsList"
                      onClick={() => handleCopyfromExisting(item)}
                    >
                      <span className="flex-grow-1 fs-6 fw-semibold text-success d-flex gap-2">
                        Invoice Number:{" "}
                        <p className="fs-6 text-dark fw-bold">
                          {item.invoiceNumber}
                        </p>
                      </span>
                      <span className="fs-6 fw-medium text-success">
                        Date of Issue :{" "}
                        <p className="fs-6 text-dark fw-bold">
                          {item.dateOfIssue}
                        </p>
                      </span>
                    </div>
                  );
                })
              : "You can generate a new invoice from the ground up."}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CopyFromExistingModal;
