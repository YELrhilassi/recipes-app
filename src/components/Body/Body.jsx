import React, { useState } from "react";

import Recipes from "./Recipes/Recipes";

export default function Body({ recipes }) {
  return <Recipes recipes={recipes} />;
}
