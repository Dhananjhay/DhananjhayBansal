import React from "react";
import cover_photo from '../images/cover_photo.jpeg'
import '../App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';import { Link } from "@mui/material";
import cv from "../documents/BANSAL_DHANANJHAY_RESUME.pdf"
import Tooltip from '@mui/material/Tooltip';

function Home() {
    return (
        <div className="home">
            <img 
            src={cover_photo} 
            style={{
                width: '350px',
                height: '350px',
                maxWidth: '100%',
                borderRadius: '50%',
                marginBottom: "2%"
                }}/>
                <div className="home-button">
                <Tooltip title="LinkedIn">
                <Link 
                href="https://www.linkedin.com/in/dhananjhay-bansal-637105193/" target="_blank">
                <LinkedInIcon 
                style={{
                    fontSize: "3rem",
                    margin: "1%",
                    color: '#e09971'
                }}
                color="inherit"
                /> 
                </Link>
                </Tooltip>
                <Tooltip title="GitHub">
                <Link href="https://github.com/Dhananjhay" target="_blank">
                <GitHubIcon 
                style={{
                    fontSize: "3rem",
                    margin: "1%",
                    color: '#9d95b0'
                }}
                color="inherit"
                />
                </Link>
                </Tooltip>
                <Tooltip title="Download CV">
                <Link href={cv} download="BANSAL_DHANANJHAY_RESUME" target="_blank">
                <ArticleIcon
                style={{
                    fontSize: "3rem",
                    margin: "1%",
                    color: '#feba67'
                }}
                color="inherit"
                />
                </Link>
                </Tooltip>
                <Tooltip title="Email">
                <Link href="mailto:dhananjhay03@gmail.com" target="_blank">
                <EmailIcon
                style={{
                    fontSize: "3rem",
                    margin: "1%",
                    color: '#e78a85'
                }}
                color="inherit"
                />
                </Link>
                </Tooltip>
                </div>
                </div>
    )
}

export default Home;