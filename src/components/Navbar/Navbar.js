import { NavLink } from "react-router-dom";
import Button from '../Button/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={styles.nav}>
            <img src="" alt="SC Logo" className={styles.logo}/>
            <ul className={styles.navbar}>
                <li className={styles.navbarItem}>
                    <NavLink to="home" className={styles.navbarLink}>Home</NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink to="mywork" className={styles.navbarLink}>My Work</NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink to="contact" className={styles.navbarLink}>Contact</NavLink>
                </li>
            </ul>
            <Button text="Resume" />
        </nav>
     );
}
 
export default Navbar;