import React from "react";
import styled from "styled-components";
import WhiskyRegionSelect from "../components/Whisky/WhiskyRegionSelect";

const SearchBar = styled.div`
  padding: 2rem;
  font-size: 1.5rem;

  & input {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;

export default function WhiskyFilters({
  products,
  setSearch,
  onRegionSelected,
}) {
  return (
    <section>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchBar>
      <WhiskyRegionSelect
        products={products}
        onRegionSelected={onRegionSelected}
      />
    </section>
  );
}
