import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/productSlice";
import WhiskyList from "../components/Whisky/WhiskyList";
import WhiskyFilters from "./WhiskyFilters";
import { products } from "../data/products";
const baseURL = "http://localhost:9000/api/whiskies/";

export default function WhiskyBox() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  async function fetchProducts() {
    const response = await fetch(baseURL);
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

  return (
    <main>
      <WhiskyFilters />
      <WhiskyList />
    </main>
  );
}
