
import { useState } from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        access_key: "52a2843d-48ea-4ba9-9a72-ec17a6d5e3ec"
    });

    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const data = JSON.stringify(formData);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5555);
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                        access_key: "52a2843d-48ea-4ba9-9a72-ec17a6d5e3ec"
                    });
                };
            });
    }

    const customFormStyles = {
        border: "4px solid var(--customBlue)",
        borderRadius: "1rem",
        backgroundImage: "radial-gradient(circle at 110%, var(--customBlue), var(--customGrey) 50%, var(--customPurple) 75%, var(--customPurple) 75%)"
    }

    return (
        <div className="mb-5">
            <form
                className="container d-flex flex-column align-items-evenly justify-content-center py-2 px-0  mt-5"
                style={customFormStyles}
                onSubmit={handleSubmit}>
                <h2>Send me a message!</h2>
                <div className="form-group mb-2 ">
                    <label htmlFor="FormControlInput1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control contactForm"
                        id="FormControlInput1"
                        autoComplete="off"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="FormControlInput1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control contactForm"
                        id="FormControlInput1"
                        autoComplete="off"
                        placeholder="Your E-mail address"
                        onChange={handleChange}
                        value={formData.email} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="FormControlTextarea1">Your Message:</label>
                    <textarea
                        name="message"
                        className="form-control contactForm"
                        id="FormControlTextarea1"
                        placeholder="Enter your message here."
                        rows="10"
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className=" my-3 btn btn-light btn-block contactBtn">{success ? <i className="fa-solid fa-check"></i> : "Send"}</button>
                </div>
                <p className="mt-1"><strong><i>Powered by <span
                className="navlinkComponent"
                onClick={e => {
                    e.preventDefault();
                    window.open("https://web3forms.com/")
                }}
                >web3forms</span></i></strong></p>
            </form>
        </div>
    )
}

export default ContactForm