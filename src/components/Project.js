


function Project(projectProp) {

    // const projectImg = projectProp.image;
    
    const liveLink = projectProp.live;
    // const placeholderKey = Math.floor(Math.random() * 100000000);

    return (
        <div className="p-2 my-5">
            <img src={projectProp.image} className="shadow-4-strong pt-1 pb-3 projectImg" alt={projectProp.title}></img>
            <h3>{projectProp.title}</h3>
            <button type="button" className="cvBtn my-2" onClick={e => {
                e.preventDefault();
                const repoLink = projectProp.repo;
                window.open(repoLink)
            }}>View GitHub Repo</button>
            <div className="mt-3">
                <a href={liveLink} className="anchor">Visit Deployed Page</a>
            </div>
        </div>
    );
}

export default Project