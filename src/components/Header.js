
import { NavLink } from "react-router-dom";

// import Home from "./Home";
// import Projects from "./Projects";
// import Contact from "./Contact";

function Header(props) {

    const headerBSStyles = "d-flex justify-content-between bg-dark text-white p-2 align-items-center";
    const navBSStyles = "mx-2 ";
    const navLinkBSStyles = "mx-1 text-decoration-none text-reset";

    return (
        <div>
            <header className={headerBSStyles}>
                <h2>AK</h2>
                <nav className={navBSStyles}>
                    <NavLink className={navLinkBSStyles} to="/">Home</NavLink>
                    <NavLink className={navLinkBSStyles} to="/Projects">Projects</NavLink>
                    <NavLink className={navLinkBSStyles} to="/Contact">Contact</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;