import React, { useMemo } from "react";
import styled from "styled-components";

export default function IngredientList({
  selectedCategory,
  allData = [],
  ...rest
}) {
  const ingredients = useMemo(() => {
    // SelectedCategory containes only one Category name
    // data is one big array with many object inside [{..},{..},{..}...]
    // each oject in data { group_name, ingredients:[] }

    // we use filter on all the data to match the object with the correct category name

    if (selectedCategory.length !== 0) {
      console.log(selectedCategory);
      const selection = allData.filter((_data) => _data.group_name);
      return selection;
    }
  }, [selectedCategory]);

  //   console.log(`selectedCategory: ${Object.keys(selectedCategory[0])}`);
  console.log(ingredients);
  return (
    <IngredientListDiv>
      {ingredients &&
        ingredients
          .sort()
          .map((ingredient, index) => (
            <Ingredient key={index} {...{ ingredient }} {...rest} />
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
