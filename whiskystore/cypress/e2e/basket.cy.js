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
    getCyId("basket-icon").click();
  });

  it("should have 2 items displayed", () => {
    getCyId("basket-item").should("have.length", 2);
  });
  it("should show the correct product in basket", () => {
    getCyId("product-name")
      .first()
      .should("have.text", "Glenfiddich 21 Year Old");
  });
  it("should show the total in the summary section", () => {
    getCyId("basket-total").should("have.text", "£206.00");
  });
  it("should remove an item from the basket", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-add-button").first().click();
    getCyId("card-quantity").first().should("have.text", 3);
    getCyId("card-remove-button").first().click();
    getCyId("card-remove-button").first().click();
    cy.get("h2").should("have.text", "No items in basket");
  });
  it("should decrease the quantity of an item", () => {
    getCyId("card-add-button").first().click();
    getCyId("card-add-button").first().click();
    getCyId("card-quantity").first().should("have.text", 3);
    getCyId("card-decrease-button").first().click();
    getCyId("card-quantity").first().should("have.text", 2);
  });
});
