import React from "react";
import cover_photo from '../Images/cover_photo.jpeg'
import '../App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import cv from "../Documents/BANSAL_DHANANJHAY_RESUME.pdf"

function Home() {
    return (
        <div className="home">
            <img 
            src={cover_photo} 
            style={{
                borderRadius: '50%',
                width: '25%',
                }}/>
                <div className="aboutMe">
            <h1 style={{
                color: "white",
                marginTop: "0%"
            }}>Dhananjhay Bansal</h1>
                <h4 
                style={{
                    color: "#e9d35b",
                    marginRight: "1%",
                }}>
                    Hi! I recently graduated from University of Alberta with a Bachelors of Science with Honors degree in Astrophysics. Although, I am a junior astrophysicist by education, I have been developing softwares and studying computer science for more than 2 years now, having contributed to 3 upcoming Canadian Telescope missions: Hydrogen Intensity and Real-time Analysis eXperiment (HIRAX), Cosmological Advanced Survey Telescope for Optical and uv Research (CASTOR), and Photometric Observations of Exoplanet Transits (POET). In my free time, I love listening to orchestra or playing soccer. 
                </h4>
                <div 
                style={{
                        display: "flex",
                }}>

    <Link 
    href="https://www.linkedin.com/in/dhananjhay-bansal-637105193/" target="_blank">
    <LinkedInIcon 
    fontSize={"large"}
    color="inherit"
    /> 
    </Link>
    <Link href="https://github.com/Dhananjhay" target="_blank">
    <GitHubIcon 
    fontSize={"large"}
    color="inherit"
    />
    </Link>
    <a href={cv} download="BANSAL_DHANANJHAY_RESUME" target="_blank">
        <Button
        style={{
            marginLeft: '5%',
            width: "100%"
        }} 
        variant="contained">
            Download CV</Button>
                    </a>
                        </div>
                </div>
        </div>
    )
}

export default Home;