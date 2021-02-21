import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewQuestionModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header>
        <Modal.Title>New Question</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formQuestion">
            <Form.Label>{props.question}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your answer..."
              value={props.answer}
              onChange={e => props.onAnswerChange(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            props.onSaveClick({
              productId: props.productId,
              question: props.question,
              answer: props.answer,
            })
          }
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewQuestionModal;
