import React from "react";
import './Projects.css'
import ProjectsCard from "./ProjectsCard/ProjectsCard";

const Projects=()=>{

    return(
        <section className="projects-container" id="projects">
        <h5>My Projects</h5>

        <div className="projects-content">
            <div  className="">
            {/* style={{ flex: 1 }} */}
                {/* <ContactInfoCard
                    iconUrl="./assets/images/icon-email.png"
                    text="siddheshdhobale@gmail.com"
                /> */}

                <ProjectsCard
                    iconUrl="./assets/images/NEWS24_Home_.png"
                    text="News 24/7 website"
                />

                 <ProjectsCard
                    iconUrl="./assets/images/Invoicer_HomeScreen.png"
                    text="Invoice Generator"
                />
            </div>
        </div>
    </section>
    )
}

export default Projects;