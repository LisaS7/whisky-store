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
    list-style: none;
    margin: 0;
  }

  & li {
    width: 6vw;
    height: 4vh;
  }

  & a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--lighter);
  }

  & a:hover {
    color: var(--gold);
    font-size: 1.7rem;
    font-weight: 700;
    transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
  }
`;

const BasketDisplay = styled.div`
  & p {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: var(--dark-gold);
    color: var(--background);
    padding: 0.2rem;
    font-size: 1.2rem;
    font-weight: 800;
    position: absolute;
    top: 34px;
    right: 25px;
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
