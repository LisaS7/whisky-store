import React from "react";
import styled from "styled-components";

const StyledWhisky = styled.div`
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px darkslategray;
`;

export default function Whisky({ whisky }) {
  return <StyledWhisky>{whisky.name}</StyledWhisky>;
}
