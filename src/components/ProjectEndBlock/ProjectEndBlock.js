import React from 'react';
import './ProjectEndBlock.css';
import Button from '../Button/Button';

const ProjectEndBlock = (props) => (
    <div className={`project-end-block ${props.backgroundColor}`}>
        <div className="title-container">
            <h3>Do you like what you’re seeing? Let’s have a chat!</h3>
        </div>
        <div className="subheading-container">
            <h2 className={`subheading-text ${props.textColor}`}>I’m always looking to <span className="spanmainbackground">expand</span> my network, 
            get <span className="spanmainbackground">engaged</span> in new challenges, 
            or just have a <span className="spanmainbackground">Coca-Cola</span>!</h2>
        </div>
        <Button 
            color={props.buttonColor}
            buttonText="Send me an email"
            buttonHref="mailto:emil@emilottosson.com"
        />
    </div>
 );

 export default ProjectEndBlock 