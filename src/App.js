import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailsPage from "./page/CocktailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";

const App =() => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CocktailsPage />} />
        <Route path="/random" element={<RandomCocktailPage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
