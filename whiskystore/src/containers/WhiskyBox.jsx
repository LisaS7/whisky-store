import React from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import { products } from "../data/products.js";

export default function WhiskyBox() {
  return (
    <main>
      <WhiskyList products={products} />
    </main>
  );
}
