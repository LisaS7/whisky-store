import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emptyCart from "./empty-cart.png";

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

  & button {
    background-color: var(--gold);
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }
`;

export default function EmptyBasket() {
  return (
    <Container>
      <img src={emptyCart} alt="empty shopping cart" />
      <h2>No items in basket</h2>
      <Link to="/products">
        <button>Go Shopping!</button>
      </Link>
    </Container>
  );
}
