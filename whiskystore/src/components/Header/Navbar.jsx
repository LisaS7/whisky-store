import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
  }
  & a {
    text-decoration: none;
    color: #e8c896;
  }
`;

const BasketDisplay = styled.div`
  & p {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #e8c896;
    color: #3b3836;
    padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 800;
    position: absolute;
    top: 30px;
    right: 30px;
  }
  & span {
    position: relative;
    font-size: 2.5rem;
  }
`;

export default function WhiskyNavbar() {
  const { basket } = useSelector((state) => state.basket);
  const basketTotal = basket.reduce((total, item) => total + item.quantity, 0);
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Link to="/basket">
        <BasketDisplay>
          <span data-cy="basket-icon" className="material-symbols-outlined">
            shopping_cart
          </span>
          <p data-cy="nav-quantity">{basketTotal}</p>
        </BasketDisplay>
      </Link>
    </Nav>
  );
}
