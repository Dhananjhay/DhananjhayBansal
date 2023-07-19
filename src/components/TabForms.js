import React, { useState } from "react";
import AboutMe from "./AbouteMe";
import Projects from "./Projects";
import { Button } from "@mui/material";
import FutureSpaceTeles from "./FutureSpaceTeles";

function TabForms(){

    const [tab,setTab] = useState(0);
    return (
        <div className="tabform">
            <div className="tabform-button-container">
            <Button variant={tab === 0 ? "contained" : "outlined"} style={{margin: '2%', borderColor: "#fbb825", color: "whitesmoke"}} onClick={()=> setTab(0)}>About Me</Button>
            <Button variant={tab === 1 ? "contained" : "outlined"} style={{margin: '2%', borderColor: "#fbb825", color: "whitesmoke"}} onClick={()=> setTab(1)}>Personal Project</Button>
            <Button variant={tab === 2 ? "contained" : "outlined"} style={{margin: '2%', borderColor: "#fbb825", color: "whitesmoke"}} onClick={()=> setTab(2)}>Software for Future Space Telescopes</Button>
        </div>
        <div className="tabform-container">
        {tab === 0 ? <AboutMe/> : tab === 1 ? <Projects/> : <FutureSpaceTeles/>}
        </div>
        </div>
    )
}

export default TabForms;