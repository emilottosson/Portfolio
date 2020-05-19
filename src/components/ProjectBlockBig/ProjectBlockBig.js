import React from 'react';
import './ProjectBlockBig.css';
import Button from '../Button/Button';
import useScript from '../FadeInSection/FadeInSection';

const ProjectBlockBig = (props) => (
    useScript('/src/observers/observer.js'),
    <div className="wrapper">
        <div className="section-ribbon">
            <h1 style={props.ribbonStyleSmallerText}>{props.projectTitle}</h1>
        </div>
        <div className="project-block-big">
            <div className="background" style={props.backgroundImage} />
            <div className={`project-overlay ${props.overlayColor}`}>
                
            </div>
            <div className="project-text-container">
                <h2 className="subheading-text fade-in">{props.projectText}</h2>
                <h2 className="skills-text">
                    {props.skills.map((item, i) => {
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

 export default ProjectBlockBig 