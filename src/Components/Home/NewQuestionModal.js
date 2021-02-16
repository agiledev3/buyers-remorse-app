import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NewQuestionModal = props => {

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>New Question</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formQuestion">
            <Form.Label>{props.question}</Form.Label>
            <Form.Control type="text" placeholder="Enter your answer..." />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onSaveClick}>Save and close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default NewQuestionModal;
