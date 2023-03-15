import React, { useState } from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import products from "../data/products.json";

export default function WhiskyBox() {
  const [user, setUser] = useState({});

  return (
    <main>
      <WhiskyList products={products} />
    </main>
  );
}
