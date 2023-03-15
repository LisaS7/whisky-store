import React, { useContext } from "react";
import BasketContext from "../../context/BasketContext";
import BasketItem from "./BasketItem";

export default function BasketList() {
  const [basket] = useContext(BasketContext);
  if (basket.length) {
    console.log("basket:", basket);
    const basketContents = basket.map((product, index) => (
      <BasketItem key={index} product={product} />
    ));
    console.log("basketcontents", basketContents);
    return <section>{basketContents}</section>;
  } else {
    return <h2>No items in basket</h2>;
  }
}
