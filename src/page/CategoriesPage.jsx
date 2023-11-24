import { useEffect, useState } from "react";

const CategoriesPage = () => {

    const[categories, setCategories] = useState (null);
    //J'utilise la fonction UseState qui a comme variable categories qui a pour valeur initiale par défaut null et pour fonction setCategory 


useEffect(() =>{
// UseEffect est une fonction qui permet de recharger le composant à certains moment. Le tableau vide permet de lui signifier qu'il va s'exécuter qu'une seule fois
// Si la valeur n'est pas null elle va passer les étapes suivantes jusqu'à récupérer le fichier. Si jamais c'est null, les étapes vont être reproduit à chaque fois

    (async()=>{
    const categoriesResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    //Je déclare une variable qui a pour fonction de récupérer l'API de l'url en utilisant fetch. Puisqu'elle est asynchrone je dois lui passer
    //comme mot-clé await
    const categoriesInJs = await categoriesResponse.json()
    //Je déclare une nouvelle variable pour récuperer la réponse et j'utilise la fonction json() pour lire le fichier json. Je dois également lui faire faire passer le mot-clé await
    setCategories(categoriesInJs.drinks)
    // Je stocke ensuite les données dans la fonction setCocktails
})();
},[]);

    return (
        <main>
            {categories? (
            //Je retourne ensuite la variable categories en utilisant un opérateur ternaire. Si categories n'est pas nul alors 
            <>
            {categories.map((category)=>{
            // Je récupère dans mon tableau 
                return (
                    <article>
                        <h2>{category.strCategory}</h2>
            {/* // les catégories */}
                    </article>
                )  
            })}
            </> 
        ):(
            <img src="https://i.gifer.com/ZZ5H.gif" alt="spinner" />
            // sinon un spinner s'affichera pour patienter
        )}
            
        </main>
    )
}

export default CategoriesPage;