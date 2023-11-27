import { Link } from "react-router-dom";

const CocktailCard = ({cocktailToDisplay}) =>{
    return(
        <article>
            <Link to ={`/cocktails/details/${cocktailToDisplay.idDrink}`}> Voir Plus de Détails</Link>
            <>
            <h2>{cocktailToDisplay.strDrink}</h2>
            <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
            </>
            
                    
        </article>
    )
}

export default CocktailCard;