import React from "react";
import covid_site from '../Images/covid-site.png'
import cnn from '../Images/cnn.png'
import Link from "@mui/material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css'

const projectList = [
    {
        img: covid_site,
        description: "A social media web application which allows people to post and access information regarding the availability of resources like oxygen tanks, plasma, etcetera. Me and friend, Ayaachi Jha, found this website during the second wave of coronavirus pandemic in India, and after a few weeks of launch, the website had 700 entries in its database. Due to its popular demand, we incorporated volunteers in our project and swiftly expanded to a team of more than 15 people. We bought the domain 'www.unitedagainstcovid19.in' and hosted the website on Amazon AWS server in 2021.",
        source_code: "https://github.com/code-against-covid/covid-site/tree/main"
    },
    {
        img: cnn,
        description: "A Convolutional Neural Network model, more specifically a semantic segmentation machine learning model, based on the famous U-Net architecture, to identify stellar wind bubbles in galaxies. The model was trained on galaxy NGC 0628, but its application can easily be extended to other galaxies. The model achieved an accuracy of more than 91% when an Intersection Over Union (IoU) loss function was implemented into the training procedure. TensorFlow and Keras platforms, along with python libraries: astropy, skimage libraries were extensively used to train and test the model.",
        source_code: "https://github.com/Dhananjhay/Undergraduate-Thesis"
    }
]

function Projects () {
    return (
        <div className="projects">
        <h1 style={{
                textAlign: "center",
                fontSize: "40px",
                paddingTop: "2%"
            }}> 
                PROJECTS
                </h1>
        {projectList.map((project) => {
            return (
        <div className="projectlist">
        <img 
        style={{
            width: "40%",
            borderRadius: "3%",
            border: "1px solid #555",
        }}
        src={project.img}/>
        <p style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft: "2%"
        }}>
        {project.description}
        <Link 
        href={project.source_code} target="_blank">
        <GitHubIcon 
        fontSize={"large"}
        color="inherit"
        />
        </Link>
        </p>
            </div>
                    )
            })}
        </div>
    )
}

export default Projects;