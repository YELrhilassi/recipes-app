import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";
import IngredientList from "./IngredientlList";

export default function Ingredients() {
  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [savedIngredients, setSavedIngredients] = useState([]);

  useEffect(() => {
    console.log("fetching all data...");
    fetch("https://d1.supercook.com/dyn/lang_ings?lang=en")
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(
          data.map((_data) => {
            return {
              categoryName: _data.group_name.split("&")[0],
              ingredients: _data.ingredients,
              showCategoryItems: false,
            };
          })
        );
      });

    return () => {
      setAllCategories([]);
    };
  }, []);

  return (
    <IngredientSect>
      <LeftSidebar>
        <CategoryList
          {...{ allCategories }} // it's the same as categories={categories}
          {...{ selectedCategories, setSelectedCategories }}
        />
      </LeftSidebar>
      <IngredientSelection>
        <IngredientList
          {...{
            selectedCategories,
          }}
        />

        <div>
          <div>Search based on selected ingredients</div>
          <button>Search</button>
          <div>still not implemented</div>
        </div>
      </IngredientSelection>
    </IngredientSect>
  );
}

/*---------------------------------------*/

const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.3rem;

  border-right: solid 1px rgba(0, 0, 0, 0.08);
`;

const IngredientSect = styled.section`
  display: flex;

  width: 28%;

  background-color: #f9f9f9;
  border: solid 1px rgba(0, 0, 0, 0.08);
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
