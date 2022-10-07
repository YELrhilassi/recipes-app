import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";
import IngredientList from "./IngredientlList";

export default function Ingredients() {
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [savedIngredients, setSavedIngredients] = useState([]);

  useEffect(() => {
    console.log("fetching all data...");
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
        <CategoryList
          {...{ categories }} // it's the same as categories={categories}
          {...{ selectedCategory, setSelectedCategory }}
        />
      </LeftSidebar>
      <IngredientSelection>
        <div>
          <input type="text" />
        </div>

        <IngredientList
          {...{
            allData,
            selectedCategory,
            savedIngredients,
            setSavedIngredients,
          }}
        />

        <div>
          <div>Search based on selected ingredients</div>
          <button onClick={() => console.log(savedIngredients)}>Search</button>
          <div>
            {savedIngredients.map((s, i) => (
              <div key={i}>{s}</div>
            ))}
          </div>
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
