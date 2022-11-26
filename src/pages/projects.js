
import React from 'react';

import './projects.css';

import Logo from './logo_button.js';
import GameOfLifeImg from './images/gameoflife.png';
import AtariImg from './images/atari.png';
import Github from './images/github.png';


function Project(props) {

    return (
        <div className="project">
            <img src={props.image} className="project-image"/>
            <div className="project-description">
                <div className="project-title">
                    {props.name}
                </div>
                <div className="technologies">
                    {props.technologies}
                </div>
                <div className="project-tools">
                    {props.tools}
                    <Logo 
                        image={Github}     
                        url={props.link}
                     />
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
