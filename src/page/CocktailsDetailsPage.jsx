import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CocktailsDetailsPage = () => {

    const {id} = useParams();

    const [cocktails, setCocktail] = useState(null)

    useEffect(()=>{
        (async() =>{
            const cocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +id)
            const cocktailDetailsInJS = await cocktailResponse.json()
            console.log(cocktailDetailsInJS)

            setCocktail(cocktailDetailsInJS.drinks)
        })();
    },[]);
    
    return (
        <main>
            {cocktails? (
            <>
                {cocktails.map((cocktail)=>{
                return (
                    <article>
                        <>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p>{cocktail.strCategory}</p>
                        <p>{cocktail.strInstructions}</p>
                        </>    
                    </article>
                );
                })}
            </>
        ):(
            <p>Aucun ingrédients trouvés</p>
        )}
        </main>
    )
}


export default CocktailsDetailsPage;