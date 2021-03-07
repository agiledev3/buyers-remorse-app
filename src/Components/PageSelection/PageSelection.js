import { useState, Fragment } from "react";
import Home from "../Home";
import EditProduct from "../EditProduct";
//list of pages in the app
import Pages from "./Pages";

// Component used to track the currently selected page and switch between pages.
// To change to a new page from another component import 'Pages' as above and
// pass setSelectedPage method down the tree to your component.
// Call setSelectedPage(Pages.<new_page>) to change to the new_page page.
const PageSelection = (props) => {
  const [selectedPage, setSelectedPage] = useState(Pages.HOME);

  return (
    <Fragment>
      {selectedPage === Pages.HOME && (
        <Home
          allProducts={props.allProducts}
          changePage={setSelectedPage}
          setStaticHeader={props.setStaticHeader}
          updateProduct={props.updateProduct}
          removeProduct={props.removeProduct}
          setCurrentProduct={props.setCurrentProduct}
          increaseLikeCount={props.increaseLikeCount}
          showForgetAlert={props.showForgetAlert}
          showBoughtAlert={props.showBoughtAlert}
        />
      )}
      {selectedPage === Pages.EDIT_PRODUCT && (
        <EditProduct
          product={props.currentProduct}
          setCurrentProduct={props.setCurrentProduct}
          changePage={setSelectedPage}
          setStaticHeader={props.setStaticHeader}
          createProduct={props.createProduct}
          updateProduct={props.updateProduct}
        />
      )}
    </Fragment>
  );
};

export default PageSelection;
