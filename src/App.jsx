import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createClient } from "contentful";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Travel from "./components/Travel";

function App() {
const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
  const fetchData = async () => {
    try {
      const response = await client.getEntries();
      setRecipes(response.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} /> 
        <Route path="/Recipes" element={<Recipes recipes={recipes}/>} />
        <Route path="/Recipes/:recipeId" element={<Recipes recipes={recipes}/>} />
        <Route path="/Travel" element={<Travel />} />
      </Routes>
    </>
  );
}

export default App;
