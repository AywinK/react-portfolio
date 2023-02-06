

function Footer() {

    const footerStylesObj = {
        backgroundImage: "linear-gradient(135deg, var(--customPurple), var(--customBlue))",
        color: "var(--customDarkBlue)"
}

    return (
        <>
        <footer className="text-center" style={footerStylesObj}>
           Copyright &copy; 2023 Aywin Kattappuram
        </footer>
        </>
    )
}

export default Footer