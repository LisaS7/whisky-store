import React from "react";
import Whisky from "./Whisky";
import styled from "styled-components";

const WhiskySection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 4rem;
`;

export default function WhiskyList({ products }) {
  const whiskies = products.map((product) => (
    <Whisky key={product.id} whisky={product} />
  ));

  return <WhiskySection>{whiskies}</WhiskySection>;
}
