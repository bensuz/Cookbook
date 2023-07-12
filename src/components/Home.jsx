// import { useState, useEffect } from "react";
// import { createClient } from "contentful";
// import {App} from "../App"
import {Link} from "react-router-dom"

const Home = ({ recipes }) => {
  return (
    <>
      <p>This is the home</p>
      <div className="App">
        
        <Link to={`/recipes/${recipe.sys.id}`}>
        <div>
          {recipes.map((recipe) => (
          <div key={recipe.sys.id}>
              <h3>{recipe.fields.recipe1}</h3>
              {/* <p>{recipe.fields.ingridients}</p> */}
              <img src={recipe.fields.recipe1Media.fields.file.url}></img>
              </div>
            ))}
            </div>
            </Link>
        </div>
      
    </>
  );
};
export default Home;
