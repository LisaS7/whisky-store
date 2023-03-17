import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/currency";

const TotalSection = styled.section`
  padding: 2rem;
  min-width: 20vw;
  background-color: #fff;
  border-left: 2px solid #1a1a19;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function BasketTotal() {
  const { basket } = useSelector((state) => state.basket);

  const basketTotal = basket.reduce((total, item) => total + item.price, 0);

  return (
    <TotalSection>
      <h2>Order Summary</h2>
      <SummaryRow>
        <h4>Items:</h4>
        <h3>{basket.reduce((total, item) => total + item.quantity, 0)}</h3>
      </SummaryRow>
      <SummaryRow>
        <h4>Total: </h4>
        <h3 data-cy="basket-total">{formatPrice(basketTotal)}</h3>
      </SummaryRow>
      <div></div>
    </TotalSection>
  );
}
