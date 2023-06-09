import { getCyId } from "../utils";

describe("whisky card tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
  });
  it("should display a product name", () => {
    getCyId("card-name").first().should("have.text", "Glenfiddich 21 Year Old");
  });
  it("should display a product price", () => {
    getCyId("card-price").first().should("have.text", "£169.00");
  });
  it("should not display quantity text before item is in basket", () => {
    getCyId("card-quantity").should("have.text", "");
  });
  it("should display quantity once item is in basket", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-quantity").first().should("have.text", "1");
  });
  it("should show remove button if quantity is greater than 0", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-remove-button").should("exist");
  });
  it("should not show quantity if item is added and then removed", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-remove-button").first().click();
    getCyId("card-quantity").first().should("have.text", "");
    getCyId("card-remove-button").should("not.exist");
  });
});
