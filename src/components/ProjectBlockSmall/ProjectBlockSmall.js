import React from 'react';
import './ProjectBlockSmall.css';
import Button from '../Button/Button';

const ProjectBlockSmall = (props) => (
    <div className="wrapper" style={props.parentDivStyle}>
        <div className="section-ribbon">
            <h1 style={props.fontSize}>{props.projectTitle}</h1>
        </div>
        <div className="project-block-small">
            <div className="background" style={props.backgroundImage} />
            <div className={`project-overlay ${props.overlayColor}`}>

            </div>
            <div className="project-text-container">
            <h2 className="subheading-text">{props.projectText}</h2>
                <h2 className="skills-text">
                    {props.skills.map((item, i) => {
                        console.log(i)
                        if(props.skills.length === i+1) {
                            return (
                                <div className="skills-container" key={i}>
                                    <p className={`${props.skillsTextColor}`}>{item}</p>
                                </div>
                            );
                        } else {
                            return (
                                <div className="skills-container" key={i}>
                                    <p className={`${props.skillsTextColor}`}>{item}</p>
                                    <div className={`separator ${props.skillsTextColor}`}>|</div>
                                </div>
                            );
                        }
                    })}
                </h2>
            </div>
            <Button 
                color={props.buttonColor}
                buttonText={props.buttonText}
                buttonHref={props.buttonHref}
            />
        </div>
    </div>
 );

 export default ProjectBlockSmall 