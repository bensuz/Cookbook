import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
<nav>
  <h1>Cook Book</h1>
  <ul>
    <li>
        <NavLink to ="/">Home</NavLink>
    </li>
    <li>
        <NavLink to ="/Recipes">Recipes</NavLink>
    </li>
    <li>
        <NavLink to ="/Travel">Travel</NavLink>
    </li>
  </ul>
</nav>
    )
}
export default NavBar;