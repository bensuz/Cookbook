import  { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { createClient } from "contentful";
import RichText from './RichText';

// import {Link} from 'react-router-dom'


// const Recipes = () => {
//     // const {recipeId} = useParams()
    
    const Recipes = () => {
      const [dish, setDish] = useState(null)
      const {recipeId} = useParams()
      const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
      });
      useEffect(() => {
        client
          .getEntry( recipeId )
          .then(response => setDish(response))

          .catch(console.error);
      }, []);
      if(!dish){
        return (
          <div>
          <h2>Serving up your dishes</h2> 
          </div>
        )
      }
      console.log(dish)
        return (
          <div>
            {dish && 
          <>
            <h2>{dish.fields.recipe1}</h2>
            <img src={dish.fields.recipe1Media.fields.file.url}></img>
            <p>{dish.fields.ingridients}</p>
            <RichText document={dish.fields.directions} />
          </>
          }
                </div>
        );
      };
// }

export default Recipes