import { useState } from "react";


const CocktailsPage = () => {

    const [cocktails, setCocktails] = useState (null)

    if (!cocktails){
    //     fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //         .then((cocktailsResponse)=>{
    //         return (
    //         cocktailsResponse.json())
    //         })
    //         .then ((cocktailsInjson)=>{
    //             setCocktails(cocktailsInjson.drinks) 
    //          });
    // }

            (async() =>{
                const cocktailsResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
                //Je déclare une variable qui a pour fonction de récupérer l'API en utilisant fetch. Puisqu'elle est asynchrone je dois lui passer
                //comme mot-clé await
                const cocktailsInjson = await cocktailsResponse.json()
                //Je déclare une nouvelle variable pour récuper le fichier JSON. Je dois également lui faire faire passer le mot-clé await
                setCocktails(cocktailsInjson.drinks)
                // Je stocke ensuite le fichier dans setCcoktails
            })();
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

