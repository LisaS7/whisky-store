import React from "react";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

export const MediumButton = styled.button`
  background-color: var(--gold);
  border: 2px solid #422800;
  border-radius: 20px;
  box-shadow: var(--header-background) 4px 4px 0 0;
  color: var(--background);
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #caa974;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export const SmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px !important;
  background-color: var(--gold);
  border: 2px solid #422800;
  border-radius: 20%;
  box-shadow: black 4px 4px 0 0;
  color: var(--background);
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  & span {
    margin: auto 0;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: #caa974;
  }

  &:active {
    box-shadow: black 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

// export const MediumButtonOutline = styled.button`
//   background-color: transparent;
//   border: 2px solid var(--lighter);
//   border-radius: 20px;
//   box-shadow: var(--header-background) 4px 4px 0 0;
//   color: var(--gold);
//   cursor: pointer;
//   display: inline-block;
//   font-weight: 600;
//   font-size: 18px;
//   padding: 0 18px;
//   line-height: 50px;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;

//   &:hover {
//     background-color: #caa974;
//     color: var(--background);
//   }

//   &:active {
//     box-shadow: #422800 2px 2px 0 0;
//     transform: translate(2px, 2px);
//   }
// `;
