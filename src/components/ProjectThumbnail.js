
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
                <div>
                    {props.projectObj.techIconsArr.map(icon => {
                        return (
                            <img src={require(`../assets/icons/${icon}.png`)} alt={icon} key={icon} className="p-2" height="50px"></img>
                        )
                    })}
                </div>
            </NavLink>
        </div>
    );
}

export default ProjectThumbnail