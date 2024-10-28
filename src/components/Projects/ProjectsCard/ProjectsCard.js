import React from "react";
import './ProjectsCard.css'

const ProjectsCard=({ iconUrl, text })=>{

    return(
        <div className="projects-info-card">
            <div className="image">
                <img src={iconUrl} alt=""/>
            </div>

            {/* <p><a href={text} target="_blank">{text}</a></p> */}
            <p>{text}</p>
        </div>
    )
}

export default ProjectsCard;