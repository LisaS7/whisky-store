import { useSelector, useDispatch } from "react-redux";
import { filterByRegion } from "../../state/productSlice";

function WhiskyRegionSelect() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const uniqueRegions = [...new Set(products.map((product) => product.region))];

  const options = uniqueRegions.map((region) => {
    return (
      <option key={region} value={region}>
        {region}
      </option>
    );
  });

  // function handleChoice(e) {
  //   const selected = products.filter(
  //     (product) => product.region === e.target.value
  //   );
  //   onRegionSelected(selected);
  // }
  return (
    <div className="select-container">
      <label htmlFor="regions">Choose a region:</label>
      <select
        onChange={(e) => dispatch(filterByRegion(e.target.value))}
        name="regions"
        id="regions"
      >
        {options}
      </select>
    </div>
  );
}

export default WhiskyRegionSelect;
