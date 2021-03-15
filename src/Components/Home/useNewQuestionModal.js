import { useState } from "react";

const findQuestionNotAlreadyAnswered = (questions, product) => {
  if (!product.questions) return questions[0];
  return questions.find((q) => !product.questions[q]);
};

//holds logic used in awareness question pop-up
const useNewQuestionModal = (questions) => {
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [productId, setProductId] = useState(null);

  const closeNewQuestionModal = () => {
    setAnswer("");
    setShow(false);
  };

  const openNewQuestionModal = (product) => {
    setQuestion(findQuestionNotAlreadyAnswered(questions, product));
    setProductId(product.id);
    setShow(true);
  };

  const handleAnswerChange = (answer) => {
    setAnswer(answer);
  };

  return {
    closeNewQuestionModal,
    openNewQuestionModal,
    handleAnswerChange,
    question,
    show,
    answer,
    productId,
  };
};

export default useNewQuestionModal;
