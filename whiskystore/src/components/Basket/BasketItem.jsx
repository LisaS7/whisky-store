import React, { useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";
import { formatPrice } from "../../utils/currency";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: 0 0 10px darkgray;
  padding: 1rem;
  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 9rem;
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

  return (
    <Container>
      <ProductImage src={product.image} alt="whisky" />
      <h3>{product.name}</h3>
      <h4>{formatPrice(product.price)}</h4>
      <RemoveIcon
        className="material-symbols-outlined"
        onClick={removeFromBasket}
      >
        disabled_by_default
      </RemoveIcon>
    </Container>
  );
}
