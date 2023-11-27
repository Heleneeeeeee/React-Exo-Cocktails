import { Link } from "react-router-dom";

const CocktailCard = ({cocktailToDisplay}) =>{

    const handleDeleteCocktail = async (event,id) => {
        const cocktailApiResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php" +id,{
            method:'DELETE'
        // Je déclare une fonction asynchrone qui a pour paramètre l'event et l'id du cocktail que l'on veut supprimer.
        // Je fais un appel fetch en utilisant la méthode "DELETE" que je stocke dans une variable afin de récupérer la réponse
        });
    };

    return(
        <article>
            <>
            <h2>{cocktailToDisplay.strDrink}</h2>
            <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
            <Link to ={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir plus de détails</Link>
            <button onClick={(event)=>handleDeleteCocktail(event,cocktailToDisplay.idDrink)}>Supprimer le cocktail</button>
            {/* Je déclenche un eventlistener sur mon bouton  et je lui fais passer en paramètre l'ID du cocktail que j'ai cliqué*/}
            </>          
        </article>
    )
}

export default CocktailCard;