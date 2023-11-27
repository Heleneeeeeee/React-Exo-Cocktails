import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CocktailsDetailsPage = () => {

    const {id} = useParams();

    const [cocktail, setCocktail] = useState(null)

    useEffect(()=>{
        (async() =>{
            const cocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +id)
            const cocktailDetailsInJS = await cocktailResponse.json()
            console.log(cocktailDetailsInJS)

            setCocktail(cocktailDetailsInJS.drinks[0])
        })();
    },[]);
    
    return (
        <main>
            {cocktail? (
                    <article>
                        <>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p>{cocktail.strCategory}</p>
                        <p>{cocktail.strInstructions}</p>
                        </>    
                    </article>
        ):(
            <p>Aucun ingrédients trouvés</p>
        )}
        </main>
    )
}


export default CocktailsDetailsPage;