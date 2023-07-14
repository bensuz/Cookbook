/* eslint-disable react/prop-types */
import RichText from "./RichText";

const RecipeTab = ({ recipes }) => {
    console.log(recipes[0].fields.directions);
    return (
        <div className="bg-gray-100 p-10">
            <h2 className="mb-10 mx-11 text-center font-bold text-xl ">
                FEATURED RECIPES
            </h2>
            <div className="flex flex-col space-y-5">
                {recipes.map((recipe) => (
                    <div
                        className="flex flex-col space-y-5 "
                        key={recipe.sys.id}
                    >
                        <div className="flex justify-center items-start  space-x-64">
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-xl font-bold">
                                    {recipe.fields.recipe1}
                                </h3>
                                <img
                                    className=""
                                    src={
                                        recipe.fields.recipe1Media.fields.file
                                            .url
                                    }
                                ></img>
                            </div>
                            <div className=" space-y-3 text-lg">
                                <RichText
                                    document={recipe.fields.ingridientsNew}
                                />
                            </div>
                        </div>

                        <div className="m-auto w-6/12 space-y-7 pt-10 text-lg">
                            <RichText document={recipe.fields.directions} />
                        </div>
                        <div>
                            <hr className="w-full h-0.5 bg-gray-300 mb-1" />
                            <hr className="w-full h-0.5 bg-gray-300 mb-50" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeTab;
