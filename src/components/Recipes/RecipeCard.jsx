import React from "react";
import styled from "styled-components";

export default function RecipeCard({ img, title }) {
  return (
    <CardDiv>
      <img src={img} />
      <h1>{title}</h1>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 30%;
  padding: 1rem;

  border: solid 1px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;

  h1 {
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }
`;
