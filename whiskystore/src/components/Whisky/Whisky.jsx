import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";

const StyledWhisky = styled.div`
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px darkslategray;
`;

export default function Whisky({ whisky }) {
  const [basket, setBasket] = useContext(BasketContext);
  function addToBasket() {
    setBasket([...basket, whisky]);
  }

  return (
    <StyledWhisky>
      {whisky.name}
      <button onClick={addToBasket}>+</button>
    </StyledWhisky>
  );
}
