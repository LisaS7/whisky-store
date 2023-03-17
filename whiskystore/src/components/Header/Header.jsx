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

  & h1 {
    font-size: 3rem;
    margin-left: 5rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>🥃 &nbsp;Array of Malts </h1>
      <WhiskyNavbar />
    </StyledHeader>
  );
}
