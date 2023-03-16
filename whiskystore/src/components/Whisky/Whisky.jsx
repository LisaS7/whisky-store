import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../state/basketSlice";
import styled from "styled-components";
import { formatPrice } from "../../utils/currency";

const WhiskyCard = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 3rem 1rem 0;
  background-color: #171515;
  color: #efe3d4;
  box-shadow: 0 0 15px #130801;
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
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  let quantity;
  if (basket.length) {
    const basketWhisky = basket.find((item) => item.id === whisky.id);
    quantity = basketWhisky ? basketWhisky.quantity : 0;
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
        <button onClick={() => dispatch(addToBasket(whisky))}>
          <span className="material-symbols-outlined">add</span>
        </button>
        <p>{quantity > 0 && quantity + " in basket"}</p>
      </ButtonContainer>
    </WhiskyCard>
  );
}
