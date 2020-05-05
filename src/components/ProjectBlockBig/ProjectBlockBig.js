import React from 'react';
import './ProjectBlockBig.css';

const ProjectBlockBig = (props) => (
    <div className="wrapper">
        <div className="section-ribbon">
            <h1 style={props.ribbonStyleSmallerText}>{props.projectTitle}</h1>
        </div>
        <div className="project-block-big">
            <div className="background" style={props.backgroundImage} />
        </div>
    </div>
 );

 export default ProjectBlockBig 