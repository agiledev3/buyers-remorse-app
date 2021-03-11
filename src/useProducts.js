import { useState } from "react";
import ErrorAlert from "./Components/ErrorAlert";

const useProducts = (products) => {
  //holds and sets the state of product errors
  const [error, setError] = useState(null);

  //tries to get products from a data store and sets an error if fails
  const getProductsSafe = () => {
    try {
      return products.getAll();
    } catch (ex) {
      if (!error) {
        setTimeout(() => {
          setError({
            heading: "Error loading products",
            body: ex.message,
          });
        }, 500);
      }
    }
    return [];
  };

  //holds and sets state of product related variables
  const [allProducts, setAllProducts] = useState(getProductsSafe());
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showForgetAlert, setShowForgetAlert] = useState(false);
  const [showBoughtAlert, setShowBoughtAlert] = useState(false);

  //tries to add a product to a data store and sets an error if fails
  const createProduct = (product) => {
    try {
      products.create.bind(products)(product);
    } catch (ex) {
      if (!error) {
        setTimeout(() => {
          setError({
            heading: "Error adding new products",
            body: ex.message,
          });
        }, 500);
      }
    }
    setAllProducts(getProductsSafe());
  };

  //tries to update a product in a data store and sets an error if fails
  const updateProduct = (productId, product) => {
    try {
      products.update.bind(products)(productId, product);
    } catch (ex) {
      if (!error) {
        setTimeout(() => {
          setError({
            heading: "Error updating product",
            body: ex.message,
          });
        }, 500);
      }
    }
    setAllProducts(getProductsSafe());
  };

  //tries to remove a product from a data store and sets an error if fails
  const removeProduct = (product, isForget) => {
    try {
      products.remove.bind(products)(product.id);
    } catch (ex) {
      if (!error) {
        setTimeout(() => {
          setError({
            heading: "Error removing product",
            body: ex.message,
          });
        }, 500);
      }
    }
    setAllProducts(getProductsSafe());

    if (isForget) {
      setShowForgetAlert(true);
    } else {
      setShowBoughtAlert(true);
    }

    setTimeout(() => {
      setShowForgetAlert(false);
      setShowBoughtAlert(false);
    }, 2000);
  };

  //upvotes a score for a product after an awareness question is answered
  const increaseLikeCount = (productId) => {
    products.increaseLikeCount.bind(products)(productId);
    setAllProducts(getProductsSafe());
  };

  return {
    allProducts,
    createProduct,
    removeProduct,
    updateProduct,
    increaseLikeCount,
    setCurrentProduct,
    currentProduct,
    showForgetAlert,
    showBoughtAlert,
    productsErrorAlert: <ErrorAlert error={error} setError={setError} />,
  };
};

export default useProducts;
