import React from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import WhiskyFilters from "./WhiskyFilters";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../state/productSlice";

export default function WhiskyBox() {
  const temp = useDispatch(fetchProducts());
  console.log("temp", temp);
  const { data } = useSelector((state) => state.data);
  // console.log("x", data);

  return (
    <main>
      <WhiskyFilters />
      <WhiskyList />
    </main>
  );
}
