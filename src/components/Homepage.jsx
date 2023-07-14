// import { useState, useEffect } from "react";
// import { createClient } from "contentful";

// const Homepage = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const client = createClient({
//             space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//             environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
//             accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
//         });
//         client
//             .getEntries()
//             .then((response) => setRecipes(response.items))
//             .catch(console.error);
//     }, []);
//     console.log(recipes);

//     return (
//         <div className="text-xl">
//             {recipes.map((recipe) => (
//                 <div key={recipe.sys.id}>
//                     <h3>{recipe.fields.recipe1}</h3>
//                     <p>{recipe.fields.ingridients}</p>
//                     <img
//                         className="max-w-xs"
//                         src="https:`{recipe.fields.recipe1Media.fields.file.url}?w=500`"
//                     ></img>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Homepage;
