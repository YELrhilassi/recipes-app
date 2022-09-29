import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export default function Ingredients() {
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    console.log("fetching...");
    fetch("https://d1.supercook.com/dyn/lang_ings?lang=en")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.map((_data) => _data.group_name));
        return data;
      })
      .then((data) => setAllData(data));

    return () => {
      setAllData([]);
      setCategories([]);
    };
  }, []);

  return (
    <IngredientSect>
      <LeftSidebar>
        <CategoryList categories={categories} setSelected={setSelected} />
      </LeftSidebar>
      <IngredientSelection>
        <div>
          <input type="text" />
        </div>
        <IngredientList selected={selected} data={allData} />
        <div>
          <div>Search based on selected ingredients</div>
          <button>Search</button>
        </div>
      </IngredientSelection>
    </IngredientSect>
  );
}

function CategoryList({ categories = [], setSelected = () => {} }) {
  return (
    <>
      {categories.map((category, index) => (
        <Selector key={index} text={category} setSelected={setSelected} />
      ))}
    </>
  );
}

function Selector({ text, setSelected = () => {} }) {
  return (
    <SlectorDiv onClick={() => setSelected(text)}>
      <span>
        <i>+</i>
      </span>
      <div>{text.split("&")[0]}</div>
    </SlectorDiv>
  );
}

function IngredientList({ selected, data = [] }) {
  const ingredients = useMemo(() => {
    if (selected !== undefined) {
      const selection = data.filter((_data) => _data.group_name == selected);
      return selection.map((t) => t.ingredients);
    }
  }, [selected]);

  return (
    <IngredientListDiv>
      {ingredients[0] &&
        ingredients[0]
          .sort()
          .map((ingredient, index) => (
            <Ingredient key={index} ingredient={ingredient} />
          ))}
    </IngredientListDiv>
  );
}

function Ingredient({ ingredient }) {
  return (
    <IngredientDiv onClick={() => console.log(ingredient)}>
      {ingredient}
    </IngredientDiv>
  );
}

const IngredientSect = styled.section`
  display: flex;

  width: 28%;

  background-color: #f9f9f9;
  border: solid 1px rgba(0, 0, 0, 0.08);
`;

const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* width: fit-content; */
  padding: 0.3rem;

  border-right: solid 1px rgba(0, 0, 0, 0.08);
`;

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

const IngredientSelection = styled.div`
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1rem;

  position: sticky;
  top: 1rem;
  /* width: 100%; */
  padding: 0.3rem;

  /* border: solid 1px orange; */
`;

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
