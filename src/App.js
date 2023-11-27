import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailsPage from "./page/CocktailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";
import CocktailsDetailsPage from "./page/CocktailsDetailsPage";


const App =() => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CocktailsPage />} />
        <Route path="/random" element={<RandomCocktailPage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path= "cocktails/details/:id" element={<CocktailsDetailsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
