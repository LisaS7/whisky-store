import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
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
    </Nav>
  );
}
