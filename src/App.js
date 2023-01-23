import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./components/CakeForm";
import { useState } from "react";

const App = () => {

  const [recipes, setRecipes] = useState ([
    {

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
        <RecipeList />
        <Search />
        <CakeForm />
      </main>
    </>
  );
}

export default App;
