import { useEffect, useState } from "react";
import styled from "styled-components";

const key = "1bd72bfafd4c4758add47c064850d45b";

export default function Suggestions({
  query = undefined,
  searchValue = () => {},
  search = () => {},
}) {
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
    <AutocompletDiv>
      {suggestions.map((suggestion) => (
        <span
          key={suggestion.id}
          onClick={() => {
            searchValue(suggestion.title);
            search();
          }}
        >
          {suggestion.title}
        </span>
      ))}
    </AutocompletDiv>
  );
}

const AutocompletDiv = styled.div`
  display: flex;
  flex-direction: column;

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
