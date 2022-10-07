import React, { useMemo } from "react";
import styled from "styled-components";

export default function CategoryList({ allCategories = [], ...rest }) {
  return (
    <>
      {allCategories.map((category, index) => (
        <Selector key={index} {...{ category }} {...rest} />
      ))}
    </>
  );
}

function Selector({
  category,
  selectedCategories,
  setSelectedCategories = () => {},
}) {
  const saveCtg = () => {
    setSelectedCategories((prev) =>
      prev.some((e) => e.categoryName == category.categoryName)
        ? [
            ...prev.map((i) => {
              if (i.categoryName == category.categoryName) {
                return {
                  categoryName: i.categoryName,
                  ingredients: i.ingredients,
                  showCategoryItems: true,
                };
              } else {
                return {
                  categoryName: i.categoryName,
                  ingredients: i.ingredients,
                  showCategoryItems: false,
                };
              }
            }),
          ]
        : [
            ...prev.map((i) => {
              return {
                categoryName: i.categoryName,
                ingredients: i.ingredients,
                showCategoryItems: false,
              };
            }),
            {
              categoryName: category.categoryName,
              ingredients: category.ingredients,
              showCategoryItems: true,
            },
          ]
    );
  };

  return (
    <SlectorDiv onClick={saveCtg}>
      <span>
        <i>+</i>
      </span>
      <div>{category.categoryName}</div>
    </SlectorDiv>
  );
}

/*------------------------------------------*/

const SlectorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.7rem 1rem;

  font-size: 1vw;

  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: rgb(225, 242, 254);
  }

  border: solid 1px green;
`;
