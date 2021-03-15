import { useEffect, Fragment } from "react";
import ProductList from "./ProductList";
import NewQuestionModal from "./NewQuestionModal.js";
import useNewQuestionModal from "./useNewQuestionModal.js";
import ProductRemovedAlert from "./ProductRemovedAlert";
import questions from "./questions.json";
import Pages from "../PageSelection/Pages.js";
import ProductNotifications from "../../ProductNotifications.js";

//Renders a list of products as a home page
const Home = (props) => {
  const {
    openNewQuestionModal,
    closeNewQuestionModal,
    handleAnswerChange,
    show,
    question,
    answer,
    productId,
  } = useNewQuestionModal(questions);

  //save answer to an awareness question, upvotes product and closes question modal
  const handleNewQuestionSave = ({ productId, question, answer }) => {
    if (question && answer)
      props.updateProduct(productId, { questions: { [question]: answer } });
    props.increaseLikeCount(productId);
    closeNewQuestionModal();
  };

  //sets values of the header element at page load
  useEffect(() => {
    props.setStaticHeader({
      title: "My wishlist",
      onBackButtonClick: null,
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const productNotifications = new ProductNotifications(
      props.allProducts,
      (productId) =>
        props.updateProduct(productId, { lastNotification: new Date() }),
      (productId) => {
        props.changePage(Pages.EDIT_PRODUCT);
        props.setCurrentProduct(productId);
      }
    );
    productNotifications.showExpiredReminders();
  });

  return (
    <Fragment>
      <ProductList
        allProducts={props.allProducts}
        changePage={props.changePage}
        removeProduct={props.removeProduct}
        setCurrentProduct={props.setCurrentProduct}
        openNewQuestionModal={openNewQuestionModal}
      />
      <NewQuestionModal
        productId={productId}
        show={show}
        question={question}
        answer={answer}
        onHide={closeNewQuestionModal}
        onSaveClick={handleNewQuestionSave}
        onAnswerChange={handleAnswerChange}
      />
      <ProductRemovedAlert
        showForgetAlert={props.showForgetAlert}
        showBoughtAlert={props.showBoughtAlert}
      />
    </Fragment>
  );
};

export default Home;
