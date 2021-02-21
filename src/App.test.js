import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * This file contains all acceptance tests of the project.
 *
 * The way they are organized reflects how we defined the use cases in the report.
 * Each 2nd level "describe" describes one use case and each 3rd level "describe" sets a scenario or state of the
 * application.
 *
 * Each "test" method block holds a expectation. Those expectations verify if the application is in the state that
 * we expect given the described scenario and use case.
 */

describe("App acceptance tests", () => {
  describe("All existing user products are listed on the main page", () => {
    beforeEach(() => {
      render(<App />);
    });

    // Checks if the home page with the product listing is being shown
    test("if in product listing page", () => {
      const productListTitle = screen.getByText(/My wishlist/i);
      expect(productListTitle).toBeInTheDocument();
    });

    // Checks if the first product is listed in the product's list
    test("if it renders the first product", () => {
      const productItem = screen.getByText(/First product/i);
      expect(productItem).toBeInTheDocument();
    });

    // Same for the second product
    test("if it renders the second product", () => {
      const productItem = screen.getByText(/Second product/i);
      expect(productItem).toBeInTheDocument();
    });

    // Same for the third product
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
        // Selects the button used to add a new product
        const addNewProductButton = screen.getByTitle(/Add new product/i);
        // Clicks the button to add a new product
        fireEvent.click(addNewProductButton);
      });

      // Checks if the page used to edit product is open
      test("if in edit product page", () => {
        const editPageTitle = screen.getByText(/Product Details/i);
        expect(editPageTitle).toBeInTheDocument();
      });

      // Builds the scenario where the user types the product details in the input fields and saves the product
      describe("when typing product details and saving", () => {
        const newProduct = {
          name: "Test product name",
        };

        // The block below is repeted before each assertion
        beforeEach(() => {
          // Types required input fields
          const productNameField = screen.getByPlaceholderText(
            /Product name .../i
          );
          fireEvent.change(productNameField, {
            target: { value: newProduct.name },
          });
          // Clicks save button
          const saveProductButton = screen.getByTitle(/Save product/i);
          fireEvent.click(saveProductButton);
        });

        // Checks if the app returned to the product listing page after the save button was clicked
        test("if returned to product listing page", () => {
          const productListTitle = screen.getByText(/My wishlist/i);
          expect(productListTitle).toBeInTheDocument();
        });

        // Checks if the new product the user just added is displayed in the product list
        test("if it renders the new product in product list", () => {
          const productItem = screen.getAllByText(newProduct.name)[0];
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
        // Selects the button used to edit an existing product
        const editProductButtons = screen.getAllByTitle(/Edit product/i);
        // Clicks the button
        fireEvent.click(editProductButtons[0]);
      });

      // Checks if the page to edit the product is open
      test("if in edit product page", () => {
        const editPageTitle = screen.getByText(/Product Details/i);
        expect(editPageTitle).toBeInTheDocument();
      });

      // Test if the input field holds the current product name
      xtest("if name field value is the existing product name", () => {
        const productNameField = screen.getAllByDisplayValue("First product");
        expect(productNameField).toBeInTheDocument();
      });

      // The scenario bellow describes when the user changes the name of the product by typing a different name on the
      // corresponding input field
      describe("when changing product name and saving", () => {
        const changedProduct = {
          name: "My changed first product",
        };

        beforeEach(() => {
          // Types required input fields
          const productNameField = screen.getByTestId("name");
          fireEvent.change(productNameField, {
            target: { value: changedProduct.name },
          });
          // Clicks save button
          const saveProductButton = screen.getByTitle(/Save product/i);
          fireEvent.click(saveProductButton);
        });

        // Tests if the app returns the the product listing after the save button is pressed
        test("if returned to product listing page", () => {
          const productListTitle = screen.getByText(/My wishlist/i);
          expect(productListTitle).toBeInTheDocument();
        });

        // Checks if the product in the list has the new product name the user just changed
        test("if it renders the product item with changed name", () => {
          const productItem = screen.getAllByText(changedProduct.name)[0];
          expect(productItem).toBeInTheDocument();
        });
      });
    });
  });
});
