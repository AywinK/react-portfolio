

function ProjectPage(props) {

    const projectObj = props.projectObj;

    const customBackground = {
        backgroundImage: "radial-gradient(circle at 360%, var(--customPurple), var(--customBlue) 60%, var(--customBlue) 75%, var(--customPurple) 95%)",
    };

    return (
        <div className="container-fluid grid p-5" style={customBackground}>
            <h2 className="customText text-center fs-1">{projectObj.title}</h2>
            <div className="row">
                <img src={require(`../assets/images/${projectObj.image}`)} className="shadow-4-strong pt-1 pb-3 projectImg img-fluid col-md-6 col-12" alt={projectObj.title}></img>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                    <p className="text-white text-center fs-2">{projectObj.description}</p>
                    <div className="d-flex justify-content-evenly align-items-center row">
                        <button type="button" className="cvBtn m-2 projectBtn col-12 col-sm-6" onClick={e => {
                            e.preventDefault();
                            window.open(projectObj.repo)
                        }}>View GitHub Repo</button>
                        <button type="button" className="cvBtn m-2 projectBtn col-12 col-sm-6" onClick={e => {
                            e.preventDefault();
                            window.open(projectObj.live)
                        }}>View Deployed Page</button>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default ProjectPage