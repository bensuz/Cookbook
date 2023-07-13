// import { useState, useEffect } from "react";
// import { createClient } from "contentful";
// import {App} from "../App"
import { Link } from "react-router-dom";

const Home = ({ recipes }) => {
    return (
        <>
            <div className="App">
                <h2 className="mb-5 mx-11 text-center font-bold text-l">
                    FEATURED RECIPES
                </h2>
                <div className=" overflow-hidden flex space-x-5 justify-center">
                    {recipes.map((recipe) => (
                        <div className="" key={recipe.sys.id}>
                            <Link to={`/recipes/${recipe.sys.id}`}>
                                <h3 className="absolute text-center z-10 bg-slate-50 bg-opacity-75 rounded p-3">
                                    {recipe.fields.recipe1}
                                </h3>
                                <img
                                    className="relative z-0 rounded-xl"
                                    src={
                                        recipe.fields.recipe1Media.fields.file
                                            .url
                                    }
                                ></img>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Home;
