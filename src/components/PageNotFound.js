

import munchlax from "../assets/images/munchlax.gif"

function PageNotFound() {

    const backgroundStyle = {
        backgroundImage: `url(${munchlax})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    const textStyle = {
        fontSize: "5em",
        color: "var(--customGrey)",
        fontFamily: "monospace"
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center p-2 text-center" style={backgroundStyle}>
            <h2 className="font-effect-emboss" style={textStyle}>That page does not exist!</h2>
        </div>
    );
}

export default PageNotFound;