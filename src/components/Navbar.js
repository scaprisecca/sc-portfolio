import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <ul className="navbar">
                <li className="navbarItem">
                    <NavLink to="home" style={navbarLink} >Home</NavLink>
                </li>
                <li className="navbarItem">
                    <NavLink to="mywork">My Work</NavLink>
                </li>
                <li className="navbarItem">
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;