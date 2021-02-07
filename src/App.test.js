import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App acceptance tests", () => {
  describe("All existing user products are listed on the main page", () => {
    beforeEach(() => {
      render(<App />);
    });

    test("if in product listing page", () => {
      const productListTitle = screen.getByText(/My wishlist/i);
      expect(productListTitle).toBeInTheDocument();
    });

    test("if it renders the first product", () => {
      const productItem = screen.getByText(/First product/i);
      expect(productItem).toBeInTheDocument();
    });

    test("if it renders the second product", () => {
      const productItem = screen.getByText(/Second product/i);
      expect(productItem).toBeInTheDocument();
    });

    test("if it renders the third product", () => {
      const productItem = screen.getByText(/Third product/i);
      expect(productItem).toBeInTheDocument();
    });
  });

  describe("It is possible to add a new product in the list", () => {
    beforeEach(() => {
      render(<App />);
    });

    describe("when the button to add a new product is clicked", () => {
      beforeEach(() => {
        const addNewProductButton = screen.getByTitle(/Add new product/i);
        fireEvent.click(addNewProductButton);
      });

      test("if in edit product page", () => {
        const editPageTitle = screen.getByText(/Product Details/i);
        expect(editPageTitle).toBeInTheDocument();
      });

      describe("when typing product details and saving", () => {
        const newProduct = {
          name: "My new product",
        };

        beforeEach(() => {
          // type required input fields
          const productNameField = screen.getByPlaceholderText(/Product name/i);
          fireEvent.change(productNameField, {
            target: { value: newProduct.name },
          });
          // click save button
          const saveProductButton = screen.getByTitle(/Save product/i);
          fireEvent.click(saveProductButton);
        });

        test("if returned to product listing page", () => {
          const productListTitle = screen.getByText(/My wishlist/i);
          expect(productListTitle).toBeInTheDocument();
        });

        test("if it renders the new product in product list", () => {
          const productItem = screen.getByText(newProduct.name);
          expect(productItem).toBeInTheDocument();
        });
      });
    });
  });

  describe("It is possible to edit an existing product in the list", () => {
    beforeEach(() => {
      render(<App />);
    });

    describe("when the button to edit an existing product is clicked", () => {
      beforeEach(() => {
        const editProductButtons = screen.getAllByTitle(/Edit product/i);
        fireEvent.click(editProductButtons[0]);
      });

      test("if in edit product page", () => {
        const editPageTitle = screen.getByText(/Product Details/i);
        expect(editPageTitle).toBeInTheDocument();
      });

      test("if name field value is the existing product name", () => {
        const productNameField = screen.getAllByDisplayValue('First product')
        expect(productNameField).toBeInTheDocument();
      });

      describe("when changing product name and saving", () => {
        const changedProduct = {
          name: "My changed first product",
        };

        beforeEach(() => {
          // type required input fields
          const productNameField = screen.getAllByDisplayValue('First product')
          fireEvent.change(productNameField, {
            target: { value: changedProduct.name },
          });
          // click save button
          const saveProductButton = screen.getByAltText(/Save product/i);
          fireEvent.click(saveProductButton);
        });

        test("if returned to product listing page", () => {
          const productListTitle = screen.getByText(/My wishlist/i);
          expect(productListTitle).toBeInTheDocument();
        });

        test("if it renders the product item with changed name", () => {
          const productItem = screen.getByText(changedProduct.name);
          expect(productItem).toBeInTheDocument();
        });
      });
    });
  });
});
