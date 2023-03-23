import React from "react";
import styled from "styled-components";
import image from "./error-404.png";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & img {
    height: 70%;
  }

  & h2 {
    color: var(--lighter);
  }
`;

export default function ErrorPage() {
  return (
    <Container>
      <img src={image} />
      <h2>The page you are looking for does not exist. Sorry!</h2>
    </Container>
  );
}
