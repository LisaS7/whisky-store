import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emptyCart from "./empty-cart.png";
import { MediumButton } from "../FormComponents/Buttons";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
  padding: 2rem;

  & img {
    width: 10vw;
  }

  & h2 {
    color: var(--lighter);
    margin-bottom: 5rem;
  }
`;

export default function EmptyBasket() {
  return (
    <Container>
      <img src={emptyCart} alt="empty shopping cart" />
      <h2>No items in basket</h2>
      <Link to="/products">
        <MediumButton>Go Shopping </MediumButton>
      </Link>
    </Container>
  );
}
