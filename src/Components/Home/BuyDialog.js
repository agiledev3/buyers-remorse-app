import { Modal, Button } from "react-bootstrap";

const BuyDialog = (props) => {
  const canBuy = props.answersCount >= 3;
  return (
    <Modal show={props.show} onHide={props.handleDeclineClick}>
      <Modal.Body>
        {canBuy
          ? "Are you sure you would like to buy this product?"
          : "Please answer at least 3 awareness questions to unlock the buy button."}
      </Modal.Body>
      {canBuy ? (
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleDeclineClick}>
            No
          </Button>
          <Button variant="danger" onClick={props.handleConfirmClick}>
            Yes
          </Button>
        </Modal.Footer>
      ) : (
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleDeclineClick}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default BuyDialog;
