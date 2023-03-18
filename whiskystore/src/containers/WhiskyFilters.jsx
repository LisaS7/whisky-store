import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { titleSearch } from "../state/productSlice";
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

export default function WhiskyFilters() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  return (
    <section>
      <SearchBar>
        <label>Search: </label>
        <input
          type="text"
          onChange={(e) => dispatch(titleSearch(e.target.value))}
        />
      </SearchBar>
      {/* <WhiskyRegionSelect/> */}
    </section>
  );
}
