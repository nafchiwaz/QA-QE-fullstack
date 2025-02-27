type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  ingredients: Ingredient[]; // ✅ Added ingredients array
  instructions: string;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe
  console.log(`Processing recipe: ${recipe.title}`);
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
