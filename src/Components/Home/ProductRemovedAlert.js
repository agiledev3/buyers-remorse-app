import { Fragment } from "react";
import { Alert } from "react-bootstrap";

const ProductRemovedAlert = (props) => {
  return (
    <Fragment>
      <Alert show={props.showForgetAlert} variant="success" className="my-1">
        <p>
          <i className="far fa-smile"></i> The product has been removed from the
          list. Good job!
        </p>
      </Alert>
      <Alert show={props.showBoughtAlert} variant="danger" className="my-1">
        <p>
          <i className="far fa-frown"></i> The product has been marked as bought
          and removed from the list.
        </p>
      </Alert>
    </Fragment>
  );
};

export default ProductRemovedAlert;
