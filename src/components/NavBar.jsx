import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className=" flex flex-col items-center px-5 py-5">
            <h1 className="text-5xl mb-7 ">Lecker Lecker</h1>
            <div className="flex align-middle space-x-5 mb-6">
                <ul className="flex flex-row  justify-around space-x-8 text-xl">
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeClassName="font-bold"
                            className={`${
                                location.pathname === "/" ? "font-bold" : ""
                            }`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Recipes"
                            activeClassName="font-bold"
                            className={`${
                                location.pathname === "/Recipes"
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Travel"
                            activeClassName="font-bold"
                            className={`${
                                location.pathname === "/Travel"
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            Travel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Contact"
                            activeClassName="font-bold"
                            className={`${
                                location.pathname === "/Contact"
                                    ? "font-bold"
                                    : ""
                            }`}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <hr className="w-full h-0.5 bg-gray-300 mb-1" />
            <hr className="w-full h-0.5 bg-gray-300 mb-50" />
        </nav>
    );
};
export default NavBar;
