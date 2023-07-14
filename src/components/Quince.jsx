import { createClient } from "contentful";
import { useState, useEffect } from "react";

const Quince = () => {
    return (
        <div className="quinceRecipeContainer">
            <h3>{quinceRecipe.fields.recipe1}</h3>
            <p>{quinceRecipe.fields.ingridients}</p>
            <img src="{quinceRecipe.fields.recipe1Media.fields.url}"></img>
        </div>
    );
};

export default Quince;
