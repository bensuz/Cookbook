/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { createClient } from "contentful";
// import {App} from "../App"
import { Link } from "react-router-dom";
import girlAvatar from "../assets/img/girlavatar.jpg";

const Home = ({ recipes }) => {
    return (
        <>
            <div className="bg-gray-100 p-10">
                <h2 className="mb-10 mx-11 text-center font-bold text-xl ">
                    FEATURED RECIPES
                </h2>
                <div className=" overflow-hidden flex space-x-5 justify-center">
                    {recipes.map((recipe) => (
                        <div key={recipe.sys.id}>
                            <Link
                                className="relative "
                                to={`/recipes/${recipe.sys.id}`}
                            >
                                <h3 className="w-3/4 absolute text-center font-bold z-10 bg-slate-50 bg-opacity-80 rounded p-3 bottom-4 left-[50%] -translate-x-1/2 hover:scale-105">
                                    {recipe.fields.recipe1}
                                </h3>
                                <img
                                    className="rounded-xl border hover:border-yellow-600"
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
            <div className="flex space-x-10 justify-center items-center p-11 text-xl">
                <label htmlFor="newsletter">GET NEW POSTS VIA E-MAIL</label>
                <div className="flex space-x-2 justify-center items-center">
                    {" "}
                    <input
                        type="email"
                        name="email"
                        className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-64 rounded-md sm:text-sm focus:ring-1 "
                        placeholder="you@example.com"
                    />
                    <button className="flex  justify-center items-center p-2 h-9 text-base bg-slate-200 rounded hover:border-sky-500 hover:bg-slate-600 hover:text-white">
                        Go
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 p-10 flex items-center justify-center space-x-52  ">
                <div className="w-1/4 space-y-12 flex flex-col items-start justify-center pt-3">
                    <p className="text-xl font-bold">Lecker Lecker Team</p>
                    <p>
                        Lecker Lecker is a trusted resource for home cooks with
                        tested recipes, guides, and meal plans We are supported
                        by a group of recipe developers, food writers, recipe
                        and product testers, photographers, and other creative
                        professionals.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-5 ">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-28 rounded-full"
                            src={girlAvatar}
                            alt=""
                        />
                        <p>Bensu Zorlu</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-28 rounded-full"
                            src={girlAvatar}
                            alt=""
                        />
                        <p>Keerthana Prabhakar</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-28 rounded-full"
                            src={girlAvatar}
                            alt=""
                        />
                        <p>Phoebe StLeger</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="w-28 rounded-full"
                            src={girlAvatar}
                            alt=""
                        />
                        <p>Gisella Haladin</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
