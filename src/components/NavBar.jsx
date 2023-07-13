import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className=" flex flex-col items-center px-5 py-5">
            <h1 className="text-5xl mb-5">Lecker Lecker</h1>
            <div className="flex align-middle space-x-5 mb-5">
                <ul className="flex flex-row  justify-around space-x-5">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Recipes">Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Travel">Travel</NavLink>
                    </li>
                </ul>
            </div>

            <hr className="w-full h-0.5 bg-gray-300 mb-1" />
            <hr className="w-full h-0.5 bg-gray-300 mb-5" />
        </nav>
    );
};
export default NavBar;
