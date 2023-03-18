import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { titleSearch } from "../state/productSlice";
import WhiskyRegionSelect from "../components/Whisky/WhiskyRegionSelect";
import { MediumButton } from "../components/Components";

const FilterControls = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  & select,
  input {
    background-color: var(--form-bg);
    color: var(--gold);
  }
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

export default function WhiskyFilters() {
  const dispatch = useDispatch();

  return (
    <FilterControls>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(e) => dispatch(titleSearch(e.target.value))}
        />
      </SearchBar>
      <WhiskyRegionSelect />
      <MediumButton>Reset</MediumButton>
    </FilterControls>
  );
}
