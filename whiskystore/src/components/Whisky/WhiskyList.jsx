import React from "react";
import Whisky from "./Whisky";
import styled from "styled-components";

const WhiskySection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 0 4rem;
`;

export default function WhiskyList({ products }) {
  const whiskies = products.map((product) => (
    <Whisky key={product.id} whisky={product} />
  ));

  return <WhiskySection>{whiskies}</WhiskySection>;
}
