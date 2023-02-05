
import { NavLink } from "react-router-dom";

// import Home from "./Home";
// import Projects from "./Projects";
// import Contact from "./Contact";

function Header(props) {

    const headerBSStyles = "d-flex justify-content-between text-white px-1 align-items-center";
    const navBSStyles = "mx-1";
    const navLinkBSStyles = "mx-1 px-1 text-decoration-none text-reset";
    const h2BSStyles = "m-1 p-1 fs-5"

    const customStylesObj =
    {
        header: {
            backgroundImage: "linear-gradient(45deg, var(--customBlue), var(--customPurple))",
        },
        h2: {
            opacity: "0.8",
            textShadow: "0.2em 0.2em 0.2em var(--customDarkBlue)",
            letterSpacing: "0.02em"
        },
    }

    return (
        <div>
            <header className={headerBSStyles} style={customStylesObj.header}>
                <h2 className={h2BSStyles} style={customStylesObj.h2}>Aywin K</h2>
                <nav className={navBSStyles}>
                    <NavLink className={navLinkBSStyles} to="/">Home</NavLink>
                    <NavLink className={navLinkBSStyles} to="/Projects">Projects</NavLink>
                    <NavLink className={navLinkBSStyles} to="/Contact">Contact</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;