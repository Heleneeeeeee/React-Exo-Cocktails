import { useEffect, useState } from "react"

const IngredientsPage =() => {

    const [ingredients, setIngredients] = useState (null)
    useEffect(()=>{
    (async () => {
    const ingredientsResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    const ingredientsInJs = await ingredientsResponse.json()
    setIngredients(ingredientsInJs.drinks)
    })()
    },[])

    return(
        <main>
            {ingredients? (
                <article>
                    {ingredients.map((ingredient)=>{
                        return(     
                        <h2>{ingredient.strIngredient1}</h2>
                        )
                        })}
                    
                </article>
                    ):(
                <img src="https://i.gifer.com/ZZ5H.gif" alt="spinner" />
            )}
            
        </main>
    )
}

export default IngredientsPage;

