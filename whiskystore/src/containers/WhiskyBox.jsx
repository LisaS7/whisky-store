import React, { useState } from "react";
import { useSelector } from "react-redux";
import WhiskyList from "../components/Whisky/WhiskyList";
import WhiskyFilters from "./WhiskyFilters";

export default function WhiskyBox() {
  const { products } = useSelector((state) => state.products);
  // const [search, setSearch] = useState("");

  // let productsList = products;
  // if (search) {
  //   productsList = products.filter((product) =>
  //     product.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // } else {
  //   productsList = products;
  // }

  return (
    <main>
      <WhiskyFilters />
      <WhiskyList />
    </main>
  );
}
