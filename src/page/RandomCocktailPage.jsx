import { useEffect, useState } from "react";
import CocktailCard from "../component/CocktailCard";

const RandomCocktailPage = () => {

    const [randomCocktail, setRandomCocktail] = useState (null);
    //J'utilise la fonction UseState qui a comme variable randomCocktail qui a pour valeur initiale null et pour fonction setRandomCocktail 

useEffect(() => {
// Si la valeur n'est pas null elle va passer les étapes suivantes jusqu'à récupérer le fichier. Si jamais c'est null, les étapes vont être reproduit à chaque fois
// UseEffect est une fonction qui permet de recharger le composant à certains moment. Le tableau vide permet de lui signifier qu'il va s'exécuter qu'une seule fois
(async () => {
    const randomCocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    //Je déclare une variable qui a pour fonction de récupérer l'API de l'url en utilisant fetch. Puisqu'elle est asynchrone je dois lui passer
    //comme mot-clé await
    const randomCocktailJS = await randomCocktailResponse.json()
    //Je déclare une nouvelle variable pour récuper la réponse et notamment le fichier json. Je dois également lui faire faire passer le mot-clé await
    setRandomCocktail(randomCocktailJS.drinks[0])
    // Je stocke ensuite les données dans la fonction setCocktails
})();
},[]);

    const handleButtonClick = () => {
        (async () => {
            const randomCocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const randomCocktailJS = await randomCocktailResponse.json()
            setRandomCocktail(randomCocktailJS.drinks[0])
        })();

    }

    return(
        <main>
        {randomCocktail != null ? (
//Je retourne ensuite la variable RandomCocktail en lui utilisant un opérateur ternaire. Si Random Cocktail n'est pas nul alors 
           <CocktailCard cocktailToDisplay = {randomCocktail}/>
// {/* elle affiche le nom du cocktail */}
            ):(
                <img src="https://i.gifer.com/ZZ5H.gif" alt="spinner" />
// sinon un spinner s'affichera pour patienter
        )}
        <button onClick={handleButtonClick}>changer de cocktail</button>
        </main>
    )
}

export default RandomCocktailPage;


// const fetchCocktail = async () => {
//     const randomCocktailResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//     const randomCocktailJS = await randomCocktailResponse.json()
// }

//useEffect est une fonction react 

