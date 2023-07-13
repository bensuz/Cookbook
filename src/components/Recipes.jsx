import  { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { createClient } from "contentful";
import RichText from './RichText';
// import NavBar from './NavBar'

// import {Link} from 'react-router-dom'


// const Recipes = () => {
//     // const {recipeId} = useParams()
    
    const Recipes = () => {
      const [dish, setDish] = useState(null)
      const [isLoading, setIsLoading] = useState(true)
      const {recipeId} = useParams()
      const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
      });
      // useEffect(() => {
      //   client
      //     .getEntry( recipeId )
      //     .then(response => setDish(response))
      //     .catch(console.error),
      //       setIsLoading(false);
      //   }, 2000);
      
      useEffect(() => {
        const fetchData = async () => {
          setTimeout(async () => {
            try {
              const response = await client.getEntry(recipeId);
              setDish(response);
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false); // Set loading state to false when data fetching is complete
            }
          }, 2000); // 2-second delay
        };
        fetchData();
      }, [client, recipeId]);

          return (
            <>
              {/* <NavBar /> */}
              {isLoading ? (
                <div>
                  <h2>Serving up your dishes</h2>
                </div>
              ) : (
                <div>
                  {dish && (
                    <>
                      <h2>{dish.fields.recipe1}</h2>
                      <img src={dish.fields.recipe1Media.fields.file.url} alt="Recipe" />
                      {/* <p>{dish.fields.ingridients}</p> */}
                      <RichText document={dish.fields.ingridientsNew} />
                      <RichText document={dish.fields.directions} />
                    </>
                  )}
                </div>
              )}
            </>
          );
        }
      
      // if(!dish){
      //   return (
      //     <div>
      //     <h2>Serving up your dishes</h2> 
      //     </div>
      //   )
      // }
      // console.log(dish)
      //   return (
          // <div>
          //   {dish && 
          // <>
          //   <h2>{dish.fields.recipe1}</h2>
          //   <img src={dish.fields.recipe1Media.fields.file.url}></img>
          //   <p>{dish.fields.ingridients}</p>
          //   <RichText document={dish.fields.directions} />
          // </>
          // }
          //       </div>
      //   );
      // };
// }

export default Recipes