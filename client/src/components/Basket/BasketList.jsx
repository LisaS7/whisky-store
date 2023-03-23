import React from "react";
import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";
import EmptyBasket from "./EmptyBasket";
import BasketTotal from "./BasketTotal";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);

  if (basket.length) {
    const basketItems = basket.map((product, index) => (
      <BasketItem key={index} product={product} />
    ));

    return (
      <Container>
        <div>{basketItems}</div>
        <BasketTotal />
      </Container>
    );
  } else {
    return <EmptyBasket />;
  }
}
