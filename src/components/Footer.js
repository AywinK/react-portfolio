

function Footer() {

    const footerStylesObj = {
        backgroundImage: "linear-gradient(135deg, var(--customPurple), var(--customBlue))",
        color: "var(--customDarkBlue)"
}

    return (
        <>
        <footer className="text-center d-flex justify-content-around align-items-center" style={footerStylesObj}>
           <p className="my-1">Copyright &copy; 2023 Aywin Kattappuram</p>
        </footer>
        </>
    )
}

export default Footer