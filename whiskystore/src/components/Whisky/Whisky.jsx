import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";
import { formatPrice } from "../../utils/currency";

const WhiskyCard = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 3rem 1rem 0;
  background-color: #171515;
  color: #efe3d4;
  box-shadow: 0 0 15px #311605;
  border: 2px solid #e2c7a5;
  border-radius: 10px;

  & img {
    width: 10rem;
  }
`;

const WhiskyDetails = styled.div`
  display: flex;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & button {
    padding: 0.5rem 0.75rem;
    background-color: #bb9457;
    border: none;
  }
`;

export default function Whisky({ whisky }) {
  const [basket, setBasket] = useContext(BasketContext);
  function addToBasket() {
    if (basket.includes(whisky)) {
      const basketWhisky = basket.find((item) => item === whisky);
      basketWhisky.quantity += 1;
      setBasket([...basket]);
    } else {
      whisky.quantity = 1;
      setBasket([...basket, whisky]);
    }
  }

  return (
    <WhiskyCard>
      <img src={whisky.image} />
      <WhiskyDetails>
        <aside>
          <h2>{whisky.name}</h2>
          <h4>{formatPrice(whisky.price)}</h4>
        </aside>
      </WhiskyDetails>
      <ButtonContainer>
        <button onClick={addToBasket}>
          <span className="material-symbols-outlined">add</span>
        </button>
        <p>{whisky.quantity && whisky.quantity + " in basket"}</p>
      </ButtonContainer>
    </WhiskyCard>
  );
}
