
import { NavLink } from "react-router-dom";

function ProjectThumbnail(props) {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="projectItem p-2">
            <NavLink to={`/Projects/${props.projectObj.title}`} className="navlinkComponent" onClick={scrollUp}>
                <img src={require(`../assets/images/webpageThumbnail.png`)} className="shadow-4-strong pt-1 pb-3 img-fluid" alt={props.projectObj.title}></img>
                <h2>{props.projectObj.title}</h2>
            </NavLink>

        </div>
    );
}

export default ProjectThumbnail