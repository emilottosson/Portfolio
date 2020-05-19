import React, {useRef} from 'react';
import {useIntersection} from 'react-use';
import './ProjectBlockBig.css';
import Button from '../Button/Button';
import gsap from "gsap"

const ProjectBlockBig = (props) => {

    const sectionRef = useRef(null);


    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    const fadeIn = element => {
        gsap.to(element, 2, {
            opacity: 1,
            ease: 'power4.out',
            stagger: {
                amount: .5
            }
        })
    };

    const fadeOut = element => {

    };

    intersection && intersection.isIntersecting
    ? fadeIn(".fadeIn")
    : fadeOut(".fadeIn");

    return (
    <div className="wrapper">
        <div className="section-ribbon">
            <h1 style={props.ribbonStyleSmallerText}>{props.projectTitle}</h1>
        </div>
        <div ref={sectionRef} className="project-block-big">
            <div className="background" style={props.backgroundImage} />
            <div className={`project-overlay ${props.overlayColor}`}>
                
            </div>
            <div className="project-text-container">
                <h2 className="subheading-text fadeIn">{props.projectText}</h2>
                <h2 className="skills-text fadeIn">
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
            <div className="fadeIn">
            <Button 
                color={props.buttonColor}
                buttonText={props.buttonText}
                buttonHref={props.buttonHref}
            />
            </div>
        </div>
    </div>
    )};

 export default ProjectBlockBig 