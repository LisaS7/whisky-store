import React from "react";
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

export default function WhiskyNavbar() {
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
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
    </Nav>
  );
}
