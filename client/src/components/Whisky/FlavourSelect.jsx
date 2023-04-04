import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFlavours,
  selectAllFlavours,
  unselectAllFlavours,
} from "../../state/productSlice";
import { MediumButtonOutline } from "../FormComponents/Buttons";
import { Checkbox } from "../FormComponents/Checkbox";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & input,
  button {
    margin: 0;
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
`;

const FlavourBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
  font-size: 1rem;
`;

export default function FlavourSelect() {
  const dispatch = useDispatch();
  const { allFlavours } = useSelector((state) => state.products);
  const { flavours } = useSelector((state) => state.products.filters);

  function handleClick(e) {
    if (e.target.id === "select") {
      dispatch(selectAllFlavours());
    } else {
      dispatch(unselectAllFlavours());
    }
  }

  const flavourElements = allFlavours.map((flavour) => (
    <Checkbox
      key={flavour}
      flavour={flavour}
      action={toggleFlavours}
      checked={flavours?.includes(flavour)}
    />
  ));

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
