import { useEffect } from "react";
import useForm from "./useForm";
import Pages from "../PageSelection/Pages";
import { Col, Button, Form, InputGroup } from "react-bootstrap";

const EditProduct = (props) => {
  const { handleChange, handleReset, product } = useForm(props.product);

  const existingProduct = !!product.id;
  const hasAnswers = !!product.questions;
  const questions = hasAnswers ? Object.keys(product.questions) : [];
  const answers = hasAnswers ? Object.values(product.questions) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingProduct) {
      props.updateProduct(product.id, product);
    } else {
      props.createProduct(product);
    }
    props.changePage(Pages.HOME);
    props.setCurrentProduct(null);
  };

  const resetAndGoHome = () => {
    handleReset();
    props.changePage(Pages.HOME);
    props.setCurrentProduct(null);
  };

  useEffect(() => {
    props.setStaticHeader({
      title: "Product Details",
      onBackButtonClick: resetAndGoHome,
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Form className="product-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name">Product name:</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={product.name}
          placeholder="Product name ..."
          name="name"
          id="name"
          data-testid="name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="linkToBuy">Link to buy:</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={product.linkToBuy}
          placeholder="Link to a website ..."
          name="linkToBuy"
          id="linkToBuy"
          pattern="(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
          title="Should be a valid web address, e.g. www.example.com"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="reasonToBuy">
          Why would you like to buy this product?
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          value={product.reasonToBuy}
          placeholder="Reason to buy ..."
          name="reasonToBuy"
          id="reasonToBuy"
          as="textarea"
          rows="3"
          required
          disabled={existingProduct}
        />
      </Form.Group>
      {hasAnswers && (
        <div className="my-2">
          {questions.map((q, i) => (
            <div className="my-1">
              <p>{q}</p>
              <p
                className="p-2"
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "0.25em",
                  background: "#e9ecef",
                  color: "#495057",
                }}
              >
                {answers[i]}
              </p>
            </div>
          ))}
        </div>
      )}
      <Form.Row>
        <Form.Group as={Col} xs="auto">
          <Form.Label htmlFor="reminderPeriod">
            How long should I wait before I remind you about this product?
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Days</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              onChange={handleChange}
              value={product.reminderPeriod}
              placeholder="Days ..."
              name="reminderPeriod"
              id="reminderPeriod"
              type="number"
              min="1"
              max="30"
              style={{ maxWidth: "5rem" }}
            />
          </InputGroup>
        </Form.Group>
        <Col lg="2"></Col>
        <Form.Group as={Col} xs="auto">
          <Form.Label htmlFor="coolingPeriod">
            How long should I lock the buy button?
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Days</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              onChange={handleChange}
              value={product.coolingPeriod}
              placeholder="Days ..."
              name="coolingPeriod"
              id="coolingPeriod"
              type="number"
              min="1"
              max="90"
              style={{ maxWidth: "5rem" }}
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button
            variant="outline-danger"
            aligned="left aligned"
            size="lg"
            onClick={resetAndGoHome}
          >
            <i className="fas fa-times-circle"></i>
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-success"
            aligned="right aligned"
            type="submit"
            size="lg"
            title="Save product"
          >
            <i className="fas fa-check"></i>
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default EditProduct;
