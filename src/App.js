import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailsPage from "./page/CocktailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";

const App =() => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CocktailsPage />} />
        <Route path="/random" element={<RandomCocktailPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
