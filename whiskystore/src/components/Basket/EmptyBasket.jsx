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
  background-color: #696664;

  & img {
    width: 10vw;
  }

  & button {
    padding: 1rem;
    border: none;
    background-color: #bb9457;
    font-weight: 600;
    border-radius: 10px;
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
