import React from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import products from "../data/products.json";

export default function WhiskyBox() {
  return (
    <main>
      <WhiskyList products={products} />
    </main>
  );
}
