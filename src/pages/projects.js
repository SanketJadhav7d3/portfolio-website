
import React from 'react';

import './projects.css';

function Project(props) {
    return (
        <div className="project">
            <img src={require("./images/atari.png")} />
            <div className="project-description">
                {props.description}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="projects-container">
            <Project name="What" description="Trained an AI to play Atari breakout" image="./images/atari.png"/>
            <Project name="What" image="./images/atari.png"/>
        </div>
    );
}
