import { useState } from "react";


const CocktailsPage = () => {

    const [cocktails, setCocktails] = useState (null)

    if (!cocktails){
        fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((response)=>{
            return (
            response.json())
            })
            .then ((cocktailsInjson)=>{
                setCocktails(cocktailsInjson.drinks) 
             });
    }

    return (
        <main>
            {cocktails? (
            <>
                {cocktails.map((cocktail)=>{
                return (
                <article>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <p>Categorie : {cocktail.strCategory}</p>
                    <p>Instructions : {cocktail.strInstructions}</p>
                </article>
                );
            })}
        </>
        ):(
            <p>Cocktails en cours de chargement</p>
        )}
        </main>
    )
}
 
export default CocktailsPage;