import React from "react";
import WhiskyNavbar from "./Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--gold);
  padding: 2rem 2rem 2rem 6rem;
  background-color: var(--header-background);
  color: var(--gold);
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Whisky Shop</h1>
      <WhiskyNavbar />
    </StyledHeader>
  );
}
