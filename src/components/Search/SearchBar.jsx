import { useState } from "react";
import Suggestions from "./Suggestions";
import styled from "styled-components";

const key = "1bd72bfafd4c4758add47c064850d45b";

export default function SearchBar({ setRecipes = () => {} }) {
  const [query, setQuery] = useState("");
  const [close, setClose] = useState(false);

  function handelSearch() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&number=52`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.results));
    setClose(true);
  }

  return (
    <SearchDiv>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClick={() => setClose(false)}
      />

      <button onClick={handelSearch}>Search</button>

      {query &&
        !close && ( //if there is something typed in, or heven't clicked on search
          <Suggestions
            query={query}
            searchValue={setQuery}
            search={handelSearch}
          />
        )}
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  display: flex;
  position: relative;
  width: 40%;
  z-index: 999;

  input {
    width: 100%;
    padding: 0.7rem 2rem;

    background-color: hsl(207.3, 84.6%, 97.5%);

    border: none;
    border-radius: 0.5rem;

    &:focus-visible {
      outline: #007cff26 solid 2px;
    }
  }
`;
