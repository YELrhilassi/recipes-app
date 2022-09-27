import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import recipes from "./recipes";

const key = "1bd72bfafd4c4758add47c064850d45b";

export default function App() {
  const [_recipes, setRecipes] = useState(recipes);
  return (
    <div>
      <GlobalStyle />
      <SearchSection>
        <SearchBar setRecipes={setRecipes} />
      </SearchSection>

      <RecipeSection>
        {_recipes.map((recipe) => (
          <Card key={recipe.id} img={recipe.image} title={recipe.title} />
        ))}
      </RecipeSection>
    </div>
  );
}

function SearchBar({ setRecipes = () => {} }) {
  const [query, setQuery] = useState("");
  const [close, setClose] = useState(false);
  function handelSearch() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&number=51`
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
      {query && !close && <Suggestions query={query} setQuery={setQuery} />}
    </SearchDiv>
  );
}

function Suggestions({ query = undefined, setQuery = () => {} }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      console.log("fetching...");
      fetch(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${key}&number=10&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => setSuggestions(data));
    }
  }, [query]);
  return (
    <AutocompleDiv>
      {suggestions.map((suggestion) => (
        <span key={suggestion.id} onClick={() => setQuery(suggestion.title)}>
          {suggestion.title}
        </span>
      ))}
    </AutocompleDiv>
  );
}

const SearchDiv = styled.div`
  display: flex;
  /* flex-direction: column; */

  position: relative;
  width: 40%;
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

const AutocompleDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */

  position: absolute;
  top: 3rem;

  width: 82%;

  background-color: hsl(207.3, 84.6%, 97.5%);

  border-radius: 0.5rem;
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: solid 1px #e8eaed;
  }

  span {
    padding: 0.7rem 2rem;
  }
  span:hover {
    display: block;
    cursor: pointer;
    background-color: #e8eaed;
  }
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 13vh;
  background-color: rgb(225, 242, 254);

  button {
    margin-left: 2rem;
    padding: 0.6rem 1rem;

    background-color: #fe8e2b;
    border: none;

    font-weight: 600;
    color: white;

    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      background-color: #ffaa3ced;
    }
  }
`;

const RecipeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 66%;
  margin: 5vw auto;
`;

function Card({ img, title }) {
  return (
    <CardBox>
      <img src={img} />
      <h1>{title}</h1>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 30%;
  padding: 1rem;

  border: solid 1px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;

  h1 {
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }
`;
