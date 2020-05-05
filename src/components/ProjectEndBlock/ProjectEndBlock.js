import React from 'react';
import './ProjectEndBlock.css';
import Button from '../Button/Button';

const ProjectEndBlock = () => (
    <div className="project-end-block">
        <div className="title-container">
            <h3>Do you like what you’re seeing? Let’s have a chat!</h3>
        </div>
        <div className="subheading-container">
            <h2 className="subheading-text">I’m always looking to <span className="spanmainbackground">expand</span> my network, 
            get <span className="spanmainbackground">engaged</span> in new challenges, 
            or just have a <span className="spanmainbackground">coffee</span>!</h2>
        </div>
        <Button 
        color="purple"
        buttonText="Send me an email"
        buttonHref="mailto:emil@emilottosson.com"
        />
    </div>
 );

 export default ProjectEndBlock 