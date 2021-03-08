import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewQuestionModal = (props) => {
  const confirmAnswer = () => {
    props.onSaveClick({
      productId: props.productId,
      question: props.question,
      answer: props.answer,
    });
  };

  const handleKeyboardEvent = (e) => {
    if (!!props.question && e.keyCode === 13) {
      e.preventDefault();
      if (props.answer.length !== 0) {
        confirmAnswer();
      }
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      onKeyDown={handleKeyboardEvent}
    >
      <Modal.Header>
        <Modal.Title>Increase product buying score</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!!props.question && (
          <Form>
            <Form.Group controlId="formQuestion">
              <Form.Label>{props.question}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer..."
                value={props.answer}
                onChange={(e) => props.onAnswerChange(e.target.value)}
                autoFocus={true}
              />
              <Form.Text muted>
                To increase the score of this product you must answer the
                question above.
              </Form.Text>
            </Form.Group>
          </Form>
        )}
        {!props.question && (
          <p>
            <strong>
              Do you want to increase the buying score of this product?
            </strong>
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          variant="primary"
          disabled={!!props.question && props.answer.length === 0}
          onClick={confirmAnswer}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewQuestionModal;
