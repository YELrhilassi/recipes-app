import styled from "styled-components";
import SearchBar from "../Search/SearchBar";

export default function Header({ setRecipes }) {
  return (
    <SearchSection>
      <SearchBar setRecipes={setRecipes} />
    </SearchSection>
  );
}

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
