
import Photo from "../assets/images/photo.jpg"

function Home() {

    const customStylesObj = {
        home: {
            Height: "100vh !important",
            backgroundImage: "linear-gradient(260deg, var(--customBlue), var(--customPurple))"
            // "linear-gradient(45deg, var(--customBlue), var(--customPurple)),",
        },
        img: {
            maxHeight: "65vh",
            maxWidth: "90vw",
            // aspectRatio: "1/1.155555555555",
            filter: "drop-shadow(5em -3em 3em var(--customGrey))",
            opacity: "0.75"
        },
        p: {
            color: "white !important",
            filter: "opacity(0.8)"
        },
        titleName: {
            fontFamily: "Sofia",
            fontSize: "3em"
        }
    };

    const brandStatement = "I am passionate about creating user-friendly websites and applications that help people get the most out of their online experience. I'm dedicated to crafting intuitive, user-friendly experiences that make complex tasks simple and enjoyable.";

    return (
        <main className="container-fluid fill" style={customStylesObj.home}>
            {/* <h1>Hello</h1> */}
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Photo} className="img-responsive rounded-circle shadow-4-strong py-2" style={customStylesObj.img} alt="Aywin Kattappuram"></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5 text-center text-white">
                <h1 className="pb-3 mb-5 font-effect-emboss" style={customStylesObj.titleName}>Aywin Kattappuram</h1>
                    <p className="fs-3" style={customStylesObj.p}>
                    {brandStatement}
                    </p>
                    <p className="fs-4 py-4 bold text-end" style={{fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--customDarkBlue)", opacity: "0.7"}}>Front End Developer | JavaScript ES6+ | Node.js | React</p>
                </div>
            </div>
        </main>
    );
}

export default Home;