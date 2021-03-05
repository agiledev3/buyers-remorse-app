import { Modal, Button } from "react-bootstrap";

const BuyDialog = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleDeclineClick}>
      <Modal.Body>Are you sure you would like to buy this product?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleDeclineClick}>
          No
        </Button>
        <Button variant="danger" onClick={props.handleConfirmClick}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyDialog;
