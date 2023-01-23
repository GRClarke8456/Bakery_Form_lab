import { useState } from "react";

const CakeForm = ({addNewRecipe}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }

        addNewRecipe(newRecipe);
    }

    const turnStringToArray = (inputString) => {
       let ingredients = inputString.split(",");
       return ingredients
    }

    return (
    <div>
        <h2>Add a New Recipe Here!!!</h2>


        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" 
                    placeholder="Cake Name"
                    onChange={(event) => setCakeName(event.target.value)}
                    value ={cakeName} />
            
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients"
                     placeholder="List of Ingredients"
                    onChange={(event) => setIngredients(turnStringToArray(event.target.value))}
                    value ={ingredients} ></textarea>
            
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5}
                     placeholder="Rating"
                    onChange={(event) => setRating(event.target.value)}
                     value ={rating} />
            
            <input type="submit"
            value = "OK" />

        </form>

        </div>
    )

}

export default CakeForm;