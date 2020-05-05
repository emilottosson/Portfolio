import React from 'react';
import './ProjectBlockSmall.css';

const ProjectBlockSmall = (props) => (
    <div className="wrapper" style={props.parentDivStyle}>
        <div className="section-ribbon">
            <h1 style={props.fontSize}>{props.projectTitle}</h1>
        </div>
        <div className="project-block-small">
            <div className="background" style={props.backgroundImage} />
        </div>
    </div>
 );

 export default ProjectBlockSmall 