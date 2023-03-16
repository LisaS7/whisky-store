import React from "react";
import BasketList from "../components/Basket/BasketList";
import styled from "styled-components";
import BasketTotal from "../components/Basket/BasketTotal";

const BasketMain = styled.main`
  display: flex;
`;

export default function BasketBox() {
  return (
    <BasketMain>
      <BasketList />
      <BasketTotal />
    </BasketMain>
  );
}
