
import { NavLink } from "react-router-dom";

function Header(props) {

    const headerBSStyles = "d-flex justify-content-between text-white px-1 align-items-center";
    const navBSStyles = "mx-1";
    const navLinkBSStyles = "mx-1 px-1 text-decoration-none text-reset fs-6";
    const h2BSStyles = "m-1 p-1 fs-1"

    const customStylesObj =
    {
        header: {
            backgroundImage: "linear-gradient(350deg, var(--customBlue), var(--customPurple))",
            opacity: "1"
        },
        h2: {
            opacity: "0.8",
            textShadow: "0.1em 0.1em 0.1em var(--customDarkBlue)",
            letterSpacing: "0.1em"
        },
        navLink: {
            letterSpacing: "-0.03em"
        }
    }

    return (
        <div>
            <header className={headerBSStyles} style={customStylesObj.header}>
                <h2 className={h2BSStyles} style={customStylesObj.h2}>AK</h2>
                <nav className={navBSStyles}>
                    <NavLink className={navLinkBSStyles} to="/">Home</NavLink>
                    <NavLink className={navLinkBSStyles} to="/Projects">Projects</NavLink>
                    <NavLink className={navLinkBSStyles} style={customStylesObj.navLink} to="/Contact">Get In Touch</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;