import React, { useState } from "react";
import styled from "styled-components";
import WhiskyList from "../components/Whisky/WhiskyList";
import { products } from "../data/products.js";

const SearchBar = styled.div`
  padding: 2rem;
  font-size: 1.5rem;

  & input {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;

export default function WhiskyBox() {
  const [search, setSearch] = useState("");
  let productsList;
  if (search) {
    productsList = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    productsList = products;
  }
  return (
    <main>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchBar>
      <WhiskyList products={productsList} />
    </main>
  );
}
