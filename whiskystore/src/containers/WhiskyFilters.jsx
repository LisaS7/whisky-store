import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, reset } from "../state/productSlice";
import WhiskyRegionSelect from "../components/Whisky/WhiskyRegionSelect";
import { MediumButton } from "../components/Components";

const FilterControls = styled.section`
  padding: 3rem;
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
  const { filters } = useSelector((state) => state.products);

  return (
    <FilterControls>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(e) =>
            dispatch(
              filterProducts({
                filterType: "search",
                filterValue: e.target.value,
              })
            )
          }
          value={filters.search}
        />
      </SearchBar>
      <WhiskyRegionSelect />
      <MediumButton onClick={() => dispatch(reset())}>Reset</MediumButton>
    </FilterControls>
  );
}
