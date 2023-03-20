import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  & .scrollbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr 2fr);
    gap: 0.5rem;
    height: 10vh;
    overflow-x: scroll;
    padding: 1.5rem;
    border: 2px solid var(--light-grey);
    font-size: 1.2rem;
  }

  & input {
    margin: 0;
    width: 30px;
  }

  & label {
    text-align: left;
  }
`;

export function Checkbox({ flavour }) {
  const [checked, setChecked] = useState(true);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <div>
      <div>
        <span class="material-symbols-outlined">check_circle</span>
        <input
          className="checkbox"
          type="checkbox"
          id={flavour}
          name={flavour}
          value={"chicken"}
          checked={checked}
          onChange={handleChange}
        />
      </div>
      <label for={flavour}>{flavour}</label>
    </div>
  );
}

export default function FlavourSelect() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { flavours } = useSelector((state) => state.products.filters);

  const uniqueFlavours = [
    ...new Set(products.map((product) => product.flavours).flat()),
  ];

  const flavourElements = uniqueFlavours.map((flavour) => (
    <Checkbox flavour={flavour} />
  ));

  return (
    <Container>
      <p>Flavours: </p>
      <div className="scrollbox">{flavourElements}</div>
    </Container>
  );
}
