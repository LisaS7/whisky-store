import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFlavours,
  selectAllFlavours,
  unselectAllFlavours,
} from "../../state/productSlice";
import { MediumButtonOutline } from "../Components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & p {
    font-size: 1.5rem;
  }
`;

const ScrollBox = styled.div`
  height: 12vh;
  overflow-x: scroll;
  padding: 1rem;
  border: 2px solid var(--light-grey);
`;

const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & button {
    margin: 0;
  }
`;

const FlavourBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr 2fr);
  gap: 0.5rem;
  font-size: 1rem;

  & input {
    margin: 0;
    width: 30px;
  }

  & label {
    text-align: left;
  }
`;

export function Checkbox({ flavour }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  function handleChange(e) {
    const newValue = e.target.checked;
    setChecked(newValue);
    dispatch(toggleFlavours({ flavour, checked: newValue }));
  }

  return (
    <>
      <div>
        <span className="material-symbols-outlined">check_circle</span>
        <input
          className="checkbox"
          type="checkbox"
          id={flavour}
          name={flavour}
          checked={checked}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <label htmlFor={flavour}>{flavour}</label>
    </>
  );
}

export default function FlavourSelect() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const uniqueFlavours = [
    ...new Set(products.map((product) => product.flavours).flat()),
  ];

  const flavourElements = uniqueFlavours.map((flavour) => (
    <Checkbox key={flavour} flavour={flavour} />
  ));

  return (
    <Container>
      <p>Flavours: </p>
      <ScrollBox>
        <FlavourBox>{flavourElements}</FlavourBox>
      </ScrollBox>
      <ControlBox>
        <MediumButtonOutline onClick={() => dispatch(selectAllFlavours())}>
          Select All
        </MediumButtonOutline>
        <MediumButtonOutline onClick={() => dispatch(unselectAllFlavours())}>
          Unselect All
        </MediumButtonOutline>
      </ControlBox>
    </Container>
  );
}
