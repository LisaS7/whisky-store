import React from "react";
import WhiskyNavbar from "./Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  border-bottom: 2px solid #e2c7a5;
  padding: 2rem 2rem 2rem 6rem;
  background-color: #171515;
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
