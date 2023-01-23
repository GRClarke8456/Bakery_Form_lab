const Recipes = ({recipes}) => {
    return (
        <ul>
            {recipes.map((recipe) => {
                return <>
                <h3>{recipe.cakeName}</h3>
                <h4>Ingredients:</h4>
                    {recipe.ingredients.map(ingredient => {
                        return <li key={recipe.cakeName}>
                            {ingredient}
                       </li> 
                    })}
                   <p>Rating: {recipe.rating}</p>
                </>
            })}
        </ul>
    )
}
export default Recipes;
