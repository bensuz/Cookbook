import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-11">
            <hr className="w-full h-0.5 bg-gray-300 mb-1" />
            <hr className="w-full h-0.5 bg-gray-300 mb-50" />

            <div className="flex align-middle justify-around space-x-5 mb-6 mt-6">
                <ul className="flex flex-row  justify-around space-x-8 text-base">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Recipes">Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Travel">Travel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
                <p>2023 - Lecker Lecker. Design by Group 4</p>
            </div>
        </div>
    );
};

export default Footer;
