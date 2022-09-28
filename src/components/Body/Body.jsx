import React, { useState } from "react";
import styled from "styled-components";
import Ingredients from "../Ingredients/Ingredients";
import Recipes from "../Recipes/Recipes";

export default function Body({ recipes }) {
  return (
    <BodyDiv>
      <Ingredients />
      <Recipes recipes={recipes} />
    </BodyDiv>
  );
}

const BodyDiv = styled.div`
  display: flex;
  position: relative;
`;
