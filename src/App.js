import { useState } from "react";

import PageSelection from "./Components/PageSelection/PageSelection.js";
import { Products, LocalStorageSource, TestSource } from "./Products";
import DateService from "./Utils/DateService";
import { PwaPrompt } from "./Components/PwaPrompt";
import StaticHeader from "./Components/StaticHeader";
import ErrorAlert from "./Components/ErrorAlert";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const products =
  process.env.NODE_ENV !== "test"
    ? new Products(LocalStorageSource, new DateService())
    : new Products(TestSource.initialize(), new DateService());

function App() {
  const [staticHeader, setStaticHeader] = useState({
    title: "Loading...",
    onBackButtonClick: null,
  });
  const [error, setError] = useState(null);
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
  const [allProducts, setAllProducts] = useState(getProductsSafe());
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showForgetAlert, setShowForgetAlert] = useState(false);
  const [showBoughtAlert, setShowBoughtAlert] = useState(false);

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
  const increaseLikeCount = (productId) => {
    products.increaseLikeCount.bind(products)(productId);
    setAllProducts(getProductsSafe());
  };

  return (
    <Container>
      <PwaPrompt />
      <StaticHeader
        title={staticHeader.title}
        onBackButtonClick={staticHeader.onBackButtonClick}
      />
      <PageSelection
        pages={App.pages}
        allProducts={allProducts}
        createProduct={createProduct}
        removeProduct={removeProduct}
        updateProduct={updateProduct}
        increaseLikeCount={increaseLikeCount}
        setCurrentProduct={setCurrentProduct}
        currentProduct={currentProduct}
        setStaticHeader={setStaticHeader}
        showForgetAlert={showForgetAlert}
        showBoughtAlert={showBoughtAlert}
      />
      <ErrorAlert error={error} setError={setError} />
    </Container>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
