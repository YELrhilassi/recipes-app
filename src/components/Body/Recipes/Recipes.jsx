import React, { useState } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

export default function Recipes({ recipes }) {
  return (
    <RecipeSection>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} img={recipe.image} title={recipe.title} />
      ))}
    </RecipeSection>
  );
}

const RecipeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 66%;
  margin: 5vw auto;
`;
