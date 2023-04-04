import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../components/Basket/EmptyBasket";
import BasketItem from "../components/Basket/BasketItem";
import BasketTotal from "../components/Basket/BasketTotal";
import styled from "styled-components";

const BasketSection = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export default function BasketBox() {
  const { basket } = useSelector((state) => state.basket);

  const basketItems = basket.map((product, index) => (
    <BasketItem key={index} product={product} />
  ));

  if (basket.length) {
    return (
      <BasketSection>
        <div>{basketItems}</div>
        <BasketTotal />
      </BasketSection>
    );
  }

  return <EmptyBasket />;
}
