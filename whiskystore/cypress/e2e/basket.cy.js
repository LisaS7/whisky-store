import { getCyId } from "../utils";

describe("basket empty tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basket");
  });
  it("should display empty basket message", () => {
    cy.get("h2").should("have.text", "No items in basket");
  });
});

describe("basket tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
    getCyId("card-add-button").first().click();
    getCyId("card-add-button").eq(1).click();
  });
});
