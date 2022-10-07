import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export default function IngredientList({ selectedCategories, ...rest }) {
  const [savedIngredients, setSavedIngredients] = useState([]);

  const ingredients = selectedCategories
    .filter((selected) => selected.showCategoryItems && selected.ingredients)
    .map((i) => i.ingredients);

  return (
    <IngredientListDiv>
      {ingredients[0] &&
        ingredients[0].map((ingredient, index) => (
          <Ingredient
            key={index}
            {...{ ingredient, savedIngredients, setSavedIngredients, ...rest }}
          />
        ))}
    </IngredientListDiv>
  );
}

function Ingredient({ ingredient, savedIngredients, setSavedIngredients }) {
  function saveIng() {
    // save the ingredient to the state SavedIngredients that comes from the Ingredient component
    setSavedIngredients((prev) =>
      prev.includes(ingredient) // check if previous SavedIngredients contain the ingredient clicked on
        ? prev.filter((i) => i !== ingredient) // if already exist retrun a copy without this ingredient
        : [...prev, ingredient]
    );
  }
  return (
    <IngredientDiv onClick={saveIng}>
      {savedIngredients.includes(ingredient) // visuall change, this will be diffrent later
        ? `${ingredient} --- saved `
        : `${ingredient}`}
    </IngredientDiv>
  );
}

/*----------------------------------*/

const IngredientListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  height: 40vw;

  overflow-y: scroll;
  border: solid 1px red;

  div {
    padding: 0.7rem 1rem;
    border: solid 1px red;

    font-weight: bold;
    text-transform: capitalize;
  }
`;

const IngredientDiv = styled.div`
  &:hover {
    cursor: pointer;
    background-color: rgb(225, 242, 254);
  }
`;
