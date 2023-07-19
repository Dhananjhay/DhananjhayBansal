import React from "react";
import { telescopeList } from "../data/data";
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function FutureSpaceTeles () {
    return (
        <div>
        {telescopeList.map((mission) => {
            return (
                    <div className="project">
                    <div>
                    <img 
                    style={{
                        width: '280px',
                        height: '250px',
                        maxWidth: '100%',
                        marginBottom: "1%",
                        borderRadius: "50%"
                    }}
                    src={mission.img}/>
                    {mission.credit ? <p style={{
                        fontSize: '1rem'
                    }}>Credits: {mission.credit}</p>: null}
                    <p>
                    <Link 
                    href={mission.source_code} target="_blank">
                    <GitHubIcon 
                    fontSize={"large"}
                    color="inherit"
                    />
                    </Link>
                    </p>
                    </div>
                    <div>
                    <h4>
                        {mission.description}
                        </h4>
                    </div>
                    </div>
                    )
            })}
        </div>
    )
}

export default FutureSpaceTeles;