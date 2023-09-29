
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteConfirmModal({show, handleClose, handleDeleteConfirm, invoiceNumber}) {

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="fs-6">
            Are you sure you want to delete this invoice {" "}
            <p className="fw-bold d-inline">{invoiceNumber}</p> ? This action cannot be undone.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmModal;
