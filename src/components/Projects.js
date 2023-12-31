import React from "react";
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css'
import { projectList } from "../data/data";


function Projects () {
    return (
        <div>
        {projectList.map((project) => {
            return (
                    <div className="project">
                    <div>
                    <img 
                    style={{
                        width: '400px',
                        height: '350px',
                        maxWidth: '100%',
                        marginBottom: "1%",
                        borderRadius: "10%"
                    }}
                    src={project.img}/>
                    {project.credit ? <p style={{
                        fontSize: '1rem'
                    }}>Credits: {project.credit}</p>: null}
                    <p>
                    <Link 
                    href={project.source_code} target="_blank">
                    <GitHubIcon 
                    fontSize={"large"}
                    color="inherit"
                    />
                    </Link>
                    </p>
                    </div>
                    <div>
                    <h4>
                        {project.description}
                        </h4>
                    </div>
                    </div>
                    )
            })}
        </div>
    )
}

export default Projects;