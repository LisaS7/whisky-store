import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, decreaseQuantity } from "../../state/basketSlice";
import styled from "styled-components";
import { SmallButton, ButtonContainer } from "../FormComponents/Buttons";
import { formatPrice } from "../../utils/currency";

const WhiskyCard = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 3rem 1rem 0;
  background-color: var(--card-bg);
  color: var(--lighter);
  box-shadow: 0 0 15px #000;
  border: 2px solid var(--lighter);
  border-radius: 10px;

  & img {
    width: 10rem;
  }

  & button {
    width: 50px;
  }
`;

const WhiskyDetails = styled.div`
  display: flex;
  text-align: left;
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
      <img src={whisky.image} alt="whisky" />
      <WhiskyDetails>
        <aside>
          <h2 data-cy="card-name">{whisky.name}</h2>
          <h4 data-cy="card-price">{formatPrice(whisky.price)}</h4>
        </aside>
      </WhiskyDetails>
      <ButtonContainer>
        {quantity > 0 ? (
          <SmallButton
            data-cy="card-remove-button"
            onClick={() => dispatch(decreaseQuantity(whisky))}
          >
            <span className="material-symbols-outlined">remove</span>
          </SmallButton>
        ) : null}

        <p data-cy="card-quantity">{quantity > 0 && quantity}</p>
        <SmallButton
          data-cy="card-add-button"
          onClick={() => dispatch(addToBasket(whisky))}
        >
          <span className="material-symbols-outlined">add</span>
        </SmallButton>
      </ButtonContainer>
    </WhiskyCard>
  );
}
