import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../../state/productSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  & select {
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    border-radius: 10px;
  }
`;

function WhiskyRegionSelect() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { filters } = useSelector((state) => state.products);
  console.log("products", products);
  const uniqueRegions = [
    "All",
    ...new Set(products.map((product) => product.region)),
  ];

  const options = uniqueRegions.map((region) => {
    return (
      <option key={region} value={region}>
        {region}
      </option>
    );
  });

  return (
    <Container>
      <label htmlFor="regions">Choose a region:</label>
      <select
        value={filters.region}
        onChange={(e) =>
          dispatch(
            filterProducts({
              filterType: "region",
              filterValue: e.target.value,
            })
          )
        }
        name="regions"
        id="regions"
      >
        {options}
      </select>
    </Container>
  );
}

export default WhiskyRegionSelect;
