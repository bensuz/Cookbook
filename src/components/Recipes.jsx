import React from 'react'
import {useParams} from 'react-router-dom'
// import {Link} from 'react-router-dom'


// const Recipes = () => {
//     // const {recipeId} = useParams()
    
    const Recipes = ({ recipes }) => {
        return (
          <>
            <p>This is the Recipe</p>
            <div className="App">
              <div>
                {recipes.map((recipe) => (
                  <div key={recipe.sys.id}>
                    <h3>{recipe.fields.recipe1}</h3>
                    <p>{recipe.fields.ingridients}</p>
                    <img src={recipe.fields.recipe1Media.fields.file.url}></img>
                    {/* <Link to={`/recipes/${recipe.sys.id}`}>Show Details</Link> */}
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      };
// }

export default Recipes