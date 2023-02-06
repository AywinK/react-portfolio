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

                <div className="col-md-6">
                    <button type="button" className="cvBtn" onClick={e => {
                        e.preventDefault();
                        window.open("https://drive.google.com/file/d/1skRkBP5KMXVQKNCtNRd5HQEa8UGZE2l8/view?usp=sharing")
                    }}>View my CV</button>
                </div>
            </div>



        </div>
    );
}

export default Contact;