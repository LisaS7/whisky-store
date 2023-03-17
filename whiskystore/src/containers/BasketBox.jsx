import React from "react";
import BasketList from "../components/Basket/BasketList";
import styled from "styled-components";

const BasketMain = styled.main`
  display: flex;
  justify-content: space-between;
`;

export default function BasketBox() {
  return (
    <BasketMain>
      <BasketList />
    </BasketMain>
  );
}
