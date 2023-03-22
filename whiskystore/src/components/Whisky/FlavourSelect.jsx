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
  width: 30vw;
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
  column-gap: 4rem;
  gap: 0.5rem;
  font-size: 1rem;

  & input {
    margin: 0;
    width: 1px;
    opacity: 0;
  }

  & label {
    text-align: left;
  }
`;

export function Checkbox({ flavour, checked }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(toggleFlavours({ flavour, checked: e.target.checked }));
  }

  return (
    <>
      <div>
        <span className="material-symbols-outlined">
          {checked ? "check_circle" : "circle"}
        </span>
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
  const { flavours } = useSelector((state) => state.products.filters);

  const uniqueFlavours = [
    ...new Set(products.map((product) => product.flavours).flat()),
  ];

  const flavourElements = uniqueFlavours.map((flavour) => (
    <Checkbox
      key={flavour}
      flavour={flavour}
      checked={flavours.includes(flavour)}
    />
  ));

  function handleClick(e) {
    if (e.target.id === "select") {
      dispatch(selectAllFlavours());
    } else {
      dispatch(unselectAllFlavours());
    }
    console.log(e);
  }

  return (
    <Container>
      <p>Flavours: </p>
      <ScrollBox>
        <FlavourBox>{flavourElements}</FlavourBox>
      </ScrollBox>
      <ControlBox>
        <MediumButtonOutline id="select" onClick={handleClick}>
          Select All
        </MediumButtonOutline>
        <MediumButtonOutline id="unselect" onClick={handleClick}>
          Unselect All
        </MediumButtonOutline>
      </ControlBox>
    </Container>
  );
}
