import { useEffect, Fragment } from "react";
import ProductList from "./ProductList";
import NewQuestionModal from "./NewQuestionModal.js";
import useNewQuestionModal from "./useNewQuestionModal.js";
import questions from "./questions.json";

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

  const handleNewQuestionSave = ({ productId, question, answer }) => {
    if (question && answer)
      props.updateProduct(productId, { questions: { [question]: answer } });
    props.increaseLikeCount(productId);
    closeNewQuestionModal();
  };

  useEffect(() => {
    props.setStaticHeader({
      title: "My ",
      onBackButtonClick: null,
    });
    //eslint-disable-next-line
  }, []);

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
    </Fragment>
  );
};

export default Home;
