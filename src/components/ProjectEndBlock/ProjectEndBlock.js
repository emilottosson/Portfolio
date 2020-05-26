import React, {Component} from 'react';
import './ProjectEndBlock.css';
import Button from '../Button/Button';

class ProjectEndBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            endBlockTitle: false,
            endBlockText: false,
            endBlockButton: false,
        };
    }

    addScrollingClasses = () => {
        var browserHeight = window.innerHeight;
        var offsets = document.getElementById("end-block").getBoundingClientRect();
        if (offsets.top <= browserHeight/2) {
            this.setState ({
                endBlockTitle: true,
            });
            setTimeout(() => {
            this.setState ({
                endBlockText: true,
            });
            }, 200);
            setTimeout(() => {
            this.setState ({
                endBlockButton: true,
            });
            }, 400);
        } else {
            return
        }
    }

    render() {

        window.addEventListener('scroll', this.addScrollingClasses);

        return (

            <div className={`project-end-block ${this.props.backgroundColor}`} id="end-block">
                <div className="title-container">
                    <h3 className={(this.state.endBlockTitle ? "show" : "hide")}>Do you like what you’re seeing? Let’s have a chat!</h3>
                </div>
                <div className="subheading-container">
                    <h2 className={`subheading-text ${this.props.textColor} ` + (this.state.endBlockText ? "show" : "hide")}>I’m always looking to <span className="spanmainbackground">expand</span> my network, 
                    get <span className="spanmainbackground">engaged</span> in new challenges, 
                    or just have a <span className="spanmainbackground">Coca-Cola</span>!</h2>
                </div>
                <div className={(this.state.endBlockButton ? "show" : "hide")}>
                <Button 
                    color={this.props.buttonColor}
                    buttonText="Send me an email"
                    buttonHref="mailto:emil@emilottosson.com"
                />
                </div>
            </div>
    )};
}

 export default ProjectEndBlock 