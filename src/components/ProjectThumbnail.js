
import { NavLink } from "react-router-dom";

function ProjectThumbnail(props) {

    // const liveLink = projectProp.live;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="projectItem p-2">
            {/* <img src={require(`../assets/images/${projectProp.image}`)}  className="shadow-4-strong pt-1 pb-3 projectImg img-fluid" alt={projectProp.title}></img> */}
            <NavLink to={`/Projects/${props.projectObj.title}`} className="navlinkComponent" onClick={scrollUp}>
                <img src={require(`../assets/images/webpageThumbnail.png`)} className="shadow-4-strong pt-1 pb-3 img-fluid" alt={props.projectObj.title}></img>
                <h2>{props.projectObj.title}</h2>
            </NavLink>
            {/* <button type="button" className="cvBtn my-2" onClick={e => {
                e.preventDefault();
                const repoLink = projectProp.repo;
                window.open(repoLink)
            }}>View GitHub Repo</button>
            <div className="mt-3">
                <a href={liveLink} className="anchor">Visit Deployed Page</a>
            </div> */}
        </div>
    );
}

export default ProjectThumbnail