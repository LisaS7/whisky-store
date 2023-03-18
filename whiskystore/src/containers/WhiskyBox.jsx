import React, { useState } from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import { products } from "../data/products.js";
import WhiskyFilters from "./WhiskyFilters";

export default function WhiskyBox() {
  const [search, setSearch] = useState("");
  let productsList = products;
  if (search) {
    productsList = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    productsList = products;
  }

  function onRegionSelected(selectedProducts) {
    productsList = selectedProducts;
  }

  return (
    <main>
      <WhiskyFilters
        products={productsList}
        setSearch={setSearch}
        onRegionSelected={onRegionSelected}
      />
      <WhiskyList products={productsList} />
    </main>
  );
}
