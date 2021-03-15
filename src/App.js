import PageSelection from "./Components/PageSelection/PageSelection.js";
import { Products, LocalStorageSource, TestSource } from "./Products";
import DateService from "./Utils/DateService";
import { PwaPrompt } from "./Components/PwaPrompt";
import { StaticHeader, useStaticHeader } from "./Components/StaticHeader";
import useProducts from "./useProducts.js";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// build a data store object depending on the environment
const products =
  process.env.NODE_ENV !== "test"
    ? new Products(LocalStorageSource, new DateService())
    : new Products(TestSource.initialize(), new DateService());

function App() {
  //manages the state of the header content
  const { staticHeader, setStaticHeader } = useStaticHeader();
  //manages product data in data store and product related alerts
  const {
    allProducts,
    createProduct,
    removeProduct,
    updateProduct,
    increaseLikeCount,
    setCurrentProduct,
    currentProduct,
    showForgetAlert,
    showBoughtAlert,
    productsErrorAlert,
  } = useProducts(products);
  return (
    <Container>
      {/* rendered only on mobile devices if app is not added to home screen*/}
      <PwaPrompt />
      {/* element with title, subtitle and optional back button*/}
      <StaticHeader
        title={staticHeader.title}
        onBackButtonClick={staticHeader.onBackButtonClick}
      />
      {/* main content of the page is rendered here*/}
      <PageSelection
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
      {/* nothing is rendered if undefined i.e. if no product errors*/}
      {productsErrorAlert}
    </Container>
  );
}

export default App;
