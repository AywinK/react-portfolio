

function Contact() {

    const customBackground = {
        backgroundImage: "radial-gradient(circle at 360%, var(--customPurple), var(--customGrey) 60%, var(--customBlue) 75%, var(--customGrey) 95%)",
    };



    return (
        <div className="text-white container-fluid" style={customBackground}>
        <h2>ContactContactContactContactContactContact</h2>



        <button className="cvBtn" onClick={e => {
            e.preventDefault();
            window.open("https://drive.google.com/file/d/1skRkBP5KMXVQKNCtNRd5HQEa8UGZE2l8/view?usp=sharing")
            
        }}>View my CV</button>

        </div>
    );
}

export default Contact;