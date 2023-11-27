import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <nav>
                <h1>Bienvenue</h1>
                <ul>
                    <li>
                        <Link to="./page/Homepage">Accueil</Link>
                    </li>
                    <li>
                        <Link to= "./cocktailspage">Liste de Cocktails</Link>
                    </li>
                    <li>
                        <Link to="./random">Cocktail Aléatoire</Link>
                    </li>
                    <li>
                        <Link to="/category">Catégorie</Link>
                    </li>
                    <li>
                        <Link to="/ingredients">Ingredients</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;