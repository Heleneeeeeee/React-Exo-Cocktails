import { useState } from "react";

const RandomCocktailPage = () => {

    const [randomCocktail, setRandomCocktail] = useState (null);
    //J'utilise la fonction UseState qui a comme variable randomCocktail qui a pour valeur initiale null et pour fonction setRandomCocktail 

if (!randomCocktail) {
// Si la valeur n'est pas null elle va passer les étapes suivantes jusqu'à récupérer le fichier. Si jamais c'est null, les étapes vont être reproduit à chaque fois
(async () => {
    const randomCocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    //Je déclare une variable qui a pour fonction de récupérer l'API de l'url en utilisant fetch. Puisqu'elle est asynchrone je dois lui passer
    //comme mot-clé await
    const randomCocktailJS = await randomCocktailResponse.json()
    //Je déclare une nouvelle variable pour récuper la réponse et notamment le fichier json. Je dois également lui faire faire passer le mot-clé await
    setRandomCocktail(randomCocktailJS.drinks[0])
    // Je stocke ensuite le fichier dans la fonction setCocktails
})();
}

    return(
        <main>
        {randomCocktail != null ? (
//Je retourne ensuite la variable RandomCocktail en lui attribuant un opérateur ternaire. Si Random Cocktail n'est pas nul alors 
            <article>
                <h2>{randomCocktail.strDrink}</h2>
{/* elle affiche le nom du cocktail */}
            </article>
            
            ):(
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop45V0HV7dZGzpUXSSpHL6WgClR5j1ruybEnOO0Th&s" alt="" />
// sinon un spinner s'affichera pour patienter
        )}
        </main>
    )
}

export default RandomCocktailPage;