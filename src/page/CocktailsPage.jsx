import { useEffect, useState } from "react";
import CocktailCard from "../component/CocktailCard";


const CocktailsPage = () => {

    const [cocktails, setCocktails] = useState (null)

    useEffect (()=>{
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
                // Je stocke ensuite le fichier dans setCocktails
            })();
        },[]);


    return (
        <main>
            {cocktails? (
            <>
                {cocktails.map((cocktail)=>{
                return (
                    <CocktailCard cocktailToDisplay = {cocktail}/>
                    
                );
            })}
        </>
        ):(
            <img src="https://i.gifer.com/ZZ5H.gif" alt="spinner" />
        )}
        </main>
    )
}
 
export default CocktailsPage;


