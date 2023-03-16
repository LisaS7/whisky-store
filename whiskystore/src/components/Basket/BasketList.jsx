import React from "react";
import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";

export default function BasketList() {
  const { basket } = useSelector((state) => state.basket);

  if (basket.length) {
    const basketItems = basket.map((product, index) => (
      <BasketItem key={index} product={product} />
    ));

    return <section>{basketItems}</section>;
  } else {
    return <h2>No items in basket</h2>;
  }
}
