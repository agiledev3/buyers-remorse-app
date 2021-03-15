import { useState } from "react";

//generic logic for Form element at Edit product page
const useForm = (existingProduct) => {
  //use a passed product for edit;
  //if none is passed - construct a default one to create
  const initProduct = existingProduct
    ? existingProduct
    : {
        name: "",
        linkToBuy: "",
        reasonToBuy: "",
        reminderPeriod: 7,
        coolingPeriod: 30,
      };

  //holds and sets current state of the product
  const [product, setValues] = useState(initProduct);
  //handles change of value in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...product, [name]: value });
  };
  //resets values in input fields to the initial state
  const handleReset = () => {
    setValues({ ...initProduct });
  };

  return { handleChange, handleReset, product };
};

export default useForm;
