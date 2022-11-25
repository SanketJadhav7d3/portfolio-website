
import React from 'react';

import './projects.css';
import GameOfLifeImg from './images/gameoflife.png';
import AtariImg from './images/atari.png';


function Project(props) {

    function openLink(url) {
        window.open(url, '_blank', 'noopener')
    }

    return (
        <div className="project" onClick={() => openLink(props.link)}>
            <img src={props.image} />
            <div className="project-description">
                <div className="project-title">
                    {props.name}
                </div>
                <div className="technologies">
                    {props.technologies}
                </div>
                <div className="project-tools">
                    {props.tools}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="projects-container">
            <Project 
                name="Trained an AI to play Atari breakout" 
                technologies="Reinforcement Learning"
                image={AtariImg}
                tools="Python | NEAT Algorithm | Pygame"
                link="https://github.com/SanketJadhav7d3/AI-plays-Atari-Breakout.git"
            />
            <Project 
                name="Game of life using pygame" 
                technologies="Algorithms"
                image={GameOfLifeImg}
                tools="Python | Pygame"
                link="https://github.com/SanketJadhav7d3/game-of-life-pygame.git"
            />
        </div>
    );
}
