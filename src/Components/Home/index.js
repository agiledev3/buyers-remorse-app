import React from "react";
import ProductList from "./ProductList";
import NewQuestionModal from "./NewQuestionModal.js";
import useNewQuestionModal from "./useNewQuestionModal.js";

const questions = ["Question 1", "Question 2"];

const Home = (props) => {
  const {
    openNewQuestionModal,
    closeNewQuestionModal,
    handleAnswerChange,
    show,
    question,
    answer,
    productId
  } = useNewQuestionModal(questions);

  const handleNewQuestionSave = ({ productId, question, answer }) => {
    props.updateProduct(productId, { questions: { [question]: answer } });
    closeNewQuestionModal();
  };

  return (
    <React.Fragment>
      <ProductList
        allProducts={props.allProducts}
        changePage={props.changePage}
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
    </React.Fragment>
  );
};

export default Home;
