import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../../state/productSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function RegionSelect() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { region } = useSelector((state) => state.products.filters);
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
      <label htmlFor="regions">Region:</label>
      <select
        value={region}
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
