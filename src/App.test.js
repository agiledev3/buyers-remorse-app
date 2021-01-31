import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App acceptance tests", () => {
  describe("All existing user products are listed on the main page", () => {
    beforeEach(() => {
      render(<App />);
    });

    test("if it is in product listing page", () => {
      const productItem = screen.getByText(/My wishlist/i);
      expect(productItem).toBeInTheDocument();
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

      test("if it is in the page to edit a product", () => {
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
          const saveProductButton = screen.getByAltText(/Save product/i);
          fireEvent.click(saveProductButton);
        });

        test("if it is in product listing page", () => {
          const productItem = screen.getByText(/My wishlist/i);
          expect(productItem).toBeInTheDocument();
        });

        test("if it renders the new product in product list", () => {
          const productItem = screen.getByText(newProduct.name);
          expect(productItem).toBeInTheDocument();
        });
      });
    });
  });
});
