

function ContactForm() {

    const customFormStyles = {
        border: "4px solid var(--customBlue)",
        borderRadius: "1rem",
        backgroundImage: "radial-gradient(circle at 110%, var(--customBlue), var(--customGrey) 50%, var(--customPurple) 75%, var(--customPurple) 75%)"
    }

    return (
        <div className="mb-5">
            <form className="container d-flex flex-column align-items-evenly justify-content-center py-2 px-0  mt-5" style={customFormStyles}>
            <h2 className="">Send me a message!</h2>
                <div class="form-group mb-2 ">
                    <label for="FormControlInput1">Name:</label>
                    <input type="text" class="form-control contactForm" id="FormControlInput1" autoComplete="off" placeholder="Your Name" />
                </div>
                <div class="form-group my-2">
                    <label for="FormControlInput1">Email:</label>
                    <input type="email" class="form-control contactForm" id="FormControlInput1" autoComplete="off" placeholder="Your E-mail address" />
                </div>
                <div class="form-group my-2">
                    <label for="FormControlTextarea1">Your Message:</label>
                    <textarea class="form-control contactForm" id="FormControlTextarea1" placeholder="Enter your message here." rows="10"></textarea>
                </div>
                <div>
                <button type="submit" class=" my-3 btn btn-light btn-outline- btn-block contactBtn">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm