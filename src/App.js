import React, { useState } from "react";

import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

import GlobalStyle from "./GlobalStyle";
import recipes from "./recipes";

export default function App() {
  const [_recipes, setRecipes] = useState(recipes);
  return (
    <div>
      <GlobalStyle />
      <Header setRecipes={setRecipes} />
      <Body recipes={_recipes} />
    </div>
  );
}
