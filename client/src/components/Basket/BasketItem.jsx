import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addToBasket,
  decreaseQuantity,
  removeFromBasket,
} from "../../state/basketSlice";
import { formatPrice } from "../../utils/currency";
import { SmallButton, ButtonContainer } from "../FormComponents/Buttons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  box-shadow: 0 0 10px darkgray;
  padding: 1rem;
  background-color: var(--dark-smoke);

  & h3,
  h4 {
    padding: 2rem 0 1rem;
  }
`;

const ProductImage = styled.img`
  width: 9rem;
`;

const RemoveIcon = styled.span`
  padding-top: 3rem;
  font-size: 2rem;
`;

export default function BasketItem({ product }) {
  const dispatch = useDispatch();

  return (
    <Container data-cy="basket-item">
      <ProductImage src={product.image} alt="whisky" />
      <h3 data-cy="product-name">{product.name}</h3>
      <h4>{formatPrice(product.price)}</h4>
      <ButtonContainer>
        {product.quantity > 0 ? (
          <SmallButton
            data-cy="card-decrease-button"
            onClick={() => dispatch(decreaseQuantity(product))}
          >
            <span className="material-symbols-outlined">remove</span>
          </SmallButton>
        ) : null}

        <p data-cy="card-quantity">
          {product.quantity > 0 && product.quantity}
        </p>
        <SmallButton
          data-cy="card-add-button"
          onClick={() => dispatch(addToBasket(product))}
        >
          <span className="material-symbols-outlined">add</span>
        </SmallButton>
      </ButtonContainer>
      <RemoveIcon
        className="material-symbols-outlined"
        data-cy="card-remove-button"
        onClick={() => dispatch(removeFromBasket(product))}
      >
        disabled_by_default
      </RemoveIcon>
    </Container>
  );
}
