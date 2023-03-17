import React, { useState } from "react";
import Whisky from "./Whisky";
import styled from "styled-components";

const WhiskySection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 4rem;
`;

const SearchBar = styled.div`
  padding: 2rem;
  font-size: 1.5rem;

  & input {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;

export default function WhiskyList({ products }) {
  const [search, setSearch] = useState("");
  let productsList;
  if (search) {
    productsList = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    productsList = products;
  }

  const whiskies = productsList.map((product) => (
    <Whisky key={product.id} whisky={product} />
  ));

  return (
    <>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchBar>
      <WhiskySection>{whiskies}</WhiskySection>
    </>
  );
}
