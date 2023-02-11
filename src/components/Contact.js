import ContactForm from "./ContactForm";


function Contact() {

    const customBackground = {
        backgroundImage: "radial-gradient(circle at 360%, var(--customPurple), var(--customGrey) 60%, var(--customBlue) 75%, var(--customGrey) 95%)",
    };



    return (
        <div className="text-white container-fluid grid" style={customBackground}>

            <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-between text-center">
                    <ContactForm />
                </div>

                <div className="col-md-6 d-flex flex-column align-items-center justify-content-around text-center fs-3 my-5 contactInfo">
                    <h2 className="fs-1" style={{color: "var(--customDarkBlue)"}}>Let's Connect!</h2>
                    <div className="my-3">
                    <i className="fa-brands fa-square-github mx-3"></i>
                    <a href="https://github.com/AywinK" className="anchor">On GitHub</a>
                    </div>
                    <div className="my-3">
                        <i className="fa-brands fa-linkedin mx-3"></i>
                        <a href="https://www.linkedin.com/in/aywin-kattappuram-7a3445132/" className="anchor">On LinkedIn</a>
                    </div>
                    <div className="mt-3">
                        <i className="fa-solid fa-envelope mx-3"></i>
                        <a href="mailto:aywingeorge@hotmail.co.uk" className="anchor">aywingeorge@hotmail.co.uk</a>
                    </div>
                    <button type="button" className="cvBtn my-5" onClick={e => {
                        e.preventDefault();
                        window.open("https://drive.google.com/file/d/1skRkBP5KMXVQKNCtNRd5HQEa8UGZE2l8/view?usp=sharing")
                    }}>View my CV</button>
                </div>
            </div>



        </div>
    );
}

export default Contact;