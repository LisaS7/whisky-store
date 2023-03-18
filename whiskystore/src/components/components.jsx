import React from "react";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

export const SmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px !important;
  padding: 0.25rem;
  background-color: var(--gold);
  border: none;
  border-radius: 10%;

  & span {
    font-size: 1.3rem;
    margin: auto 0;
  }
`;
