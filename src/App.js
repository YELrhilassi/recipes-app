import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import recipes from "./recipes";

export default function App() {
  const [query, setQuery] = useState("");
  const [Search, setSearch] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <SearchSection>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </SearchSection>

      <RecipeSection>
        {recipes.map((recipe) => (
          <Card key={recipe.id} img={recipe.image} title={recipe.title} />
        ))}
      </RecipeSection>
    </div>
  );
}

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 13vh;
  background-color: rgb(225, 242, 254);

  input {
    width: 50%;
    padding: 0.7rem 2rem;

    background-color: hsl(207.3, 84.6%, 97.5%);

    border: none;
    border-radius: 0.5rem;

    &:focus-visible {
      outline: #007cff26 solid 2px;
    }
  }

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
