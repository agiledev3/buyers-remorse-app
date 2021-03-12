import { Fragment } from "react";
import { Alert } from "react-bootstrap";

//An alert to display user-friendly text at exception handling
const ErrorAlert = (props) => {
  const { error, setError } = props;
  return (
    <Fragment>
      {error && (
        <Alert
          show={!!error}
          variant="danger"
          className="my-1"
          onClose={() => setError(null)}
          dismissible
        >
          <Alert.Heading>{error.heading}</Alert.Heading>
          <p>{error.body}</p>
        </Alert>
      )}
    </Fragment>
  );
};

export default ErrorAlert;
