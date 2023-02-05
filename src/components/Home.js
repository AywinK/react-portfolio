
import Photo from "../assets/images/photo.png"

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
        }
    };

    return (
        <div className="container-fluid" style={customStylesObj.home}>
            {/* <h1>Hello</h1> */}
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Photo} className="img-responsive " style={customStylesObj.img} alt="Aywin Kattappuram"></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5 text-center text-white">
                <h1 className="pb-3 mb-5 text-decoration-underline">Aywin Kattappuram</h1>
                    <p className="fs-3" style={customStylesObj.p}>I'm a Front End Web Developer passionate about creating user-friendly websites and applications that help people get the most out of their online experience. 
                        I'm dedicated to crafting intuitive, user-friendly experiences that make complex tasks simple and enjoyable.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;