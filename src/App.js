import NavBar from "./NavBar";
import Title from "./Title";
// import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./components/CakeForm";
import Recipes from "./components/Recipes";
import "./App.css";
import { useState } from "react";

const App = () => {

  const [recipes, setRecipes] = useState ([
    {
      cakeName: "Lemon Drizzle",
      ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
      rating: 5
  },
  {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      rating: 3
  },
  {
      cakeName: "Brownie",
      ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
      rating: 4
  },
  {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      rating: 5
  }
  ])

  const addNewRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }

  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        {/* <RecipeList /> */}
        <Search />
        <Recipes recipes={recipes}/>
        <CakeForm addNewRecipe={addNewRecipe}/>
      </main>
    </>
  );
}

export default App;
