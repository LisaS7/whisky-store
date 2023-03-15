import React from "react";
import WhiskyNavbar from "./Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #000;
  color: #bb9457;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Whisky Shop</h1>
      <WhiskyNavbar />
    </StyledHeader>
  );
}
