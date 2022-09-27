export let ingredients = {
  Tomato: {},
  Onion: { recipes: ["Chicken Tajin"] },
  Potato: { recipes: ["Chicken Tajin"] },
  Chicken: { recipes: ["Chicken Tajin"] },
  Fish: {},
  Carrot: { recipes: ["Chicken Tajin"] },
  Lettuce: {},
  Beet: {},
  Apple: {},
  Lemon: {},
  Lime: {},
  Yeast: {},
  Bread: {},
  "Olive Oil": {},
  Flour: {},
  Sugar: {},
};

export let recipes = {
  "Chicken Tajin": {
    ingredients: ["Chicken", "Potato", "Onion", "Carrot"],
    description:
      "A delicious savoury Maroccan main course served hot in a clay Tajin.",
  },
  "Fish Tacos": {
    ingredients: ["Fish", "Lime", "Tomato", "Lettuce"],
    description:
      "A Mexican street favourite - fish and veggie filling in a warm corn tortilla.",
  },
};
