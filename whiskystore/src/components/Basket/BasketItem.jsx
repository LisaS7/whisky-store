import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  box-shadow: 0 0 10px darkgray;
  padding: 1rem;
  background-color: #fff;
`;

export default function BasketItem({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(product.price / 100);
  return (
    <Container>
      <h3>{product.name}</h3>
      <h4>{formattedPrice}</h4>
      <span className="material-symbols-outlined">disabled_by_default</span>
    </Container>
  );
}
