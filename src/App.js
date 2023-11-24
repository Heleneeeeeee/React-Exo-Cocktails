import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailsPage from "./page/CocktailsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CocktailsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
