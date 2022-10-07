import React from "react";
import styled from "styled-components";

export default function CategoryList({ categories = [], ...rest }) {
  return (
    <>
      {categories.map((category, index) => (
        <Selector key={index} {...{ category }} {...rest} />
      ))}
    </>
  );
}

function Selector({
  category,
  selectedCategory,
  setSelectedCategory = () => {},
}) {
  function saveCtg() {
    setSelectedCategory((prev) =>
      prev.some((e) => Object.keys(e) == category)
        ? prev.filter((e) => Object.keys(e) != category)
        : [...prev, { [category]: [] }]
    );

    // console.log(selectedCategory.some((e) => Object.keys(e) == category));
    // console.log(selectedCategory.filter((e) => Object.keys(e) != category));
  }

  return (
    <SlectorDiv onClick={saveCtg}>
      <span>
        <i>+</i>
      </span>
      <div>
        {selectedCategory.some((e) => Object.keys(e) == category)
          ? `${category.split("&")[0]}  >`
          : category.split("&")[0]}
      </div>
    </SlectorDiv>
    // the name of the catergory is sometimes complex so it is Split
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
