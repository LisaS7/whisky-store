import { getCyId } from "../utils";

describe("header and navbar tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
  });
  it("should show zero items in cart", () => {
    getCyId("nav-quantity").should("have.text", 0);
  });
  it("should show one item in cart after item is added", () => {
    getCyId("card-add-button").first().click();
    getCyId("nav-quantity").should("have.text", 1);
  });
  it("should show quantity for multiple items", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-add-button").first().click();
    getCyId("card-add-button").eq(1).click();
    getCyId("nav-quantity").should("have.text", 3);
  });
});
