import "./App.css";
import Quince from "./components/Quince";
import Homepage from "./components/Homepage";
import { createClient } from "contentful";
import { useState, useEffect } from "react";

function App() {
    const [quinceRecipe, setQuinceRecipe] = useState([]);
    useEffect(() => {
        const client = createClient({
            space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
            environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
            accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
        });
        client
            .getEntries()
            .then((response) => setQuinceRecipe(response.items))
            .catch(console.error);
    }, []);
    console.log(quinceRecipe);

    return (
        <>
            <Homepage />
            <Quince />
        </>
    );
}

export default App;
