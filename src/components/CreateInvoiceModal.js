import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CreateInvoiceModal({ show, handleClose, handleCopyfromExisting }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="fs-6">
            You can either generate a new invoice from the ground up or
            replicate one from an existing invoice.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCopyfromExisting}>
            Copy from Existing
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create New
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateInvoiceModal;
