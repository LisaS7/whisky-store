import styled from "styled-components";
import { useDispatch } from "react-redux";

const StyledCheck = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: left;

  & input {
    opacity: 0;
  }
`;

export function Checkbox({ flavour, checked, action }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(action({ flavour, checked: e.target.checked }));
  }

  return (
    <StyledCheck htmlFor={flavour}>
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
      <span>{flavour}</span>
    </StyledCheck>
  );
}
