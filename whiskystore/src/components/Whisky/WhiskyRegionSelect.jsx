function WhiskyRegionSelect({ products, onRegionSelected }) {
  const options = products.map((product) => {
    return (
      <option key={product.id} value={product.region}>
        {product.region}
      </option>
    );
  });

  function handleChoice(e) {
    const selected = products.filter(
      (product) => product.region === e.target.value
    );
    onRegionSelected(selected);
  }
  return (
    <div className="select-container">
      <label htmlFor="regions">Choose a region:</label>
      <select onChange={handleChoice} name="regions" id="regions">
        {options}
      </select>
    </div>
  );
}

export default WhiskyRegionSelect;
