import React from "react";
import BasketItem from "./BasketItem";

export default function BasketList() {
  // needs redux state
  const basket = [];
  if (basket.length) {
    const basketContents = basket.map((product, index) => (
      <BasketItem key={index} product={product} />
    ));
    return <section>{basketContents}</section>;
  } else {
    return <h2>No items in basket</h2>;
  }
}
