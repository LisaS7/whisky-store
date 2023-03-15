import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";
import { formatPrice } from "../../utils/currency";

const StyledWhisky = styled.div`
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px darkslategray;

  & section {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }
`;

const Image = styled.img`
  width: 10rem;
`;

const AddButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: #bb9457;
  border: none;
`;

export default function Whisky({ whisky }) {
  const [basket, setBasket] = useContext(BasketContext);
  function addToBasket() {
    setBasket([...basket, whisky]);
  }

  return (
    <StyledWhisky>
      <Image src={whisky.image} />
      <section>
        <aside>
          <h2>{whisky.name}</h2>
          <h4>{formatPrice(whisky.price)}</h4>
        </aside>
        <AddButton onClick={addToBasket}>
          <span class="material-symbols-outlined">add</span>
        </AddButton>
      </section>
    </StyledWhisky>
  );
}
