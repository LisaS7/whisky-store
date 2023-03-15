import React, { useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  box-shadow: 0 0 10px darkgray;
  padding: 1rem;
  background-color: #fff;
`;

const RemoveIcon = styled.span`
  padding-top: 1rem;
  font-size: 2rem;
`;

export default function BasketItem({ product }) {
  const [basket, setBasket] = useContext(BasketContext);

  function removeFromBasket() {
    const newBasketContents = basket.filter((item) => item.id !== product.id);
    setBasket(newBasketContents);
  }

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(product.price / 100);
  return (
    <Container>
      <h3>{product.name}</h3>
      <h4>{formattedPrice}</h4>
      <RemoveIcon
        className="material-symbols-outlined"
        onClick={removeFromBasket}
      >
        disabled_by_default
      </RemoveIcon>
    </Container>
  );
}
