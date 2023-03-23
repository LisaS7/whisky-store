import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "./whisky2.jpg";

const Container = styled.main`
  & img {
    width: 100vw;
    height: 100vh;
    opacity: 60%;
    position: relative;
  }
`;

const ImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  font-family: "Lobster", cursive;
  font-size: 3.5rem;
  color: var(--dark-smoke);
  text-align: center;
  position: absolute;
  top: 30vh;
  left: 20vw;

  & h1 {
    margin: 0;
  }

  & button {
    padding: 2rem;
    border-radius: 50%;
    font-size: 2rem;
    font-family: "Lobster", cursive;
    background-color: var(--dark-smoke);
    color: var(--gold);
  }
`;

export default function Home() {
  return (
    <Container>
      <img src={photo} alt="whisky" />
      <ImageOverlay>
        <h1>
          Smoky
          <br />& Rich
        </h1>
        <Link to="/products">
          <button>View Whiskies</button>
        </Link>
      </ImageOverlay>
    </Container>
  );
}
