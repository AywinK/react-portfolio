
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectData from "./ProjectData.json";


function Projects() {

    const pageTitle = "<Projects />"; //styled as react component syntax

    const customBackground = {
        backgroundImage: "radial-gradient(circle at 360%, var(--customPurple), var(--customBlue) 60%, var(--customBlue) 75%, var(--customPurple) 95%)",
    };

    return (
        <div className="text-white container-fluid grid text-center" style={customBackground}>
            <h2 className="pt-3 customText fs-1 row justify-content-center monospaceFont">{pageTitle}</h2>
            <main className="row justify-content-center align-items-center">
                {ProjectData.data.map((projectObj) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-12 p-5" key={projectObj.title}>
                        <ProjectThumbnail projectObj={projectObj} />
                        </div>
                    )
                    })}
            </main>
        </div>
    );
}

export default Projects;