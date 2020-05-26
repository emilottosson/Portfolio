import React, {Component} from 'react';
import './ProjectBlockBig.css';
import Button from '../Button/Button';

class ProjectBlockBig extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectText: false,
            projectSkills: false,
            projectButton: false,
        };
      }

    addScrollingClasses = () => {
    var browserHeight = window.innerHeight;
    var offsets = document.getElementById(this.props.order).getBoundingClientRect();
    if (offsets.top <= browserHeight/2) {
        this.setState ({
            projectText: true,
        });
        setTimeout(() => {
        this.setState ({
            projectSkills: true,
        });
        }, 200);
        setTimeout(() => {
        this.setState ({
            projectButton: true,
        });
        }, 400);
    } else {
        return
    }
    }

    render() {

    window.addEventListener('scroll', this.addScrollingClasses);

    return (
    <div className="wrapper"  id={`${this.props.order}`}>
        <div className="section-ribbon">
            <h1 style={this.props.ribbonStyleSmallerText}>{this.props.projectTitle}</h1>
        </div>
        <div className="project-block-big">
            <div className="background" style={this.props.backgroundImage} />
            <div className={`project-overlay ${this.props.overlayColor}`}>
                
            </div>
            <div className="project-text-container">
                <h2 className={"subheading-text " + (this.state.projectText ? "show" : "hide")}>{this.props.projectText}</h2>
                <h2 className={"skills-text " + (this.state.projectSkills ? "show" : "hide")}>
                    {this.props.skills.map((item, i) => {
                        if(this.props.skills.length === i+1) {
                            return (
                                <div className="skills-container" key={i}>
                                    <p className={`${this.props.skillsTextColor}`}>{item}</p>
                                </div>
                            );
                        } else {
                            return (
                                <div className="skills-container" key={i}>
                                    <p className={`${this.props.skillsTextColor}`}>{item}</p>
                                    <div className={`separator ${this.props.skillsTextColor}`}>|</div>
                                </div>
                            );
                        }
                    })}
                </h2>
            </div>
            <div className={(this.state.projectButton ? "show" : "hide")}>
            <Button 
                color={this.props.buttonColor}
                buttonText={this.props.buttonText}
                buttonHref={this.props.buttonHref}
            />
            </div>
        </div>
    </div>
    )};
}
 export default ProjectBlockBig 