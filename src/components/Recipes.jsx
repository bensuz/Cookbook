import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import RichText from "./RichText";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation.json";

const Recipes = () => {
    const [dish, setDish] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { recipeId } = useParams();
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

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
        <div className="flex flex-col justify-center items-center">
            {isLoading ? (
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-center text-3xl">
                        Serving up your dishes...
                    </h2>
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        className="w-1/3"
                    />
                </div>
            ) : (
                <div className="border-4 w-3/4 flex flex-col items-center justify-center">
                    {dish && (
                        <>
                            <h2 className="text-4xl my-4">{dish.fields.recipe1}</h2>
                            <img
                                src={dish.fields.recipe1Media.fields.file.url}
                                className="rounded-xl mb-6"
                                alt="Recipe"
                            />
                            <div className="flex flex-col items-start mx-10">
                            <RichText document={dish.fields.ingridientsNew} />
                            <RichText document={dish.fields.directions} />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Recipes;
