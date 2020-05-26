import React, {Component} from 'react';
import './Workflow.css';
import arrowright from '../../svgs/arrow-right.svg';
import arrowleft from '../../svgs/arrow-left.svg';
import arrowleftsmall from '../../svgs/arrow-left-small.svg';
import arrowrightsmall from '../../svgs/arrow-right-small.svg';
import arrowup from '../../svgs/arrow-up.svg';
import arrowdown from '../../svgs/arrow-down.svg';
import repeat from '../../svgs/repeat.svg';
import Button from '../Button/Button';

class Workflow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      workflowTitleFadeIn: false,
      workflowSubTitleFadeIn: false,
      workflowGraphTextFadeIn: false,
      workflowButtonFadeIn: false,
      workflowFirstCircleFadeIn: false,
      workflowSecondCircleFadeIn: false,
      workflowThirdCircleFadeIn: false,
      workflowFourthCircleFadeIn: false,
      workflowCircleTitles: false,
      workflowRepeatArrow: false,
      workflowFirstArrow: false,
      workflowSecondArrow: false,
      workflowThirdArrow: false,
      workflowFourthArrow: false,
    };
  }

  addScrollingClasses = () => {
    var browserHeight = window.innerHeight;
    var offsets = document.getElementById('workflow').getBoundingClientRect();
    if (offsets.top <= browserHeight/2) {
      this.setState ({
        workflowTitleFadeIn: true,
      });
      setTimeout(() => {
        this.setState ({
          workflowSubTitleFadeIn: true,
          workflowFirstCircleFadeIn: true,
        });
      }, 200);
      setTimeout(() => {
        this.setState ({
          workflowSecondCircleFadeIn: true,
        });
      }, 300);
      setTimeout(() => {
        this.setState ({
          workflowThirdCircleFadeIn: true,
        });
      }, 400);
      setTimeout(() => {
        this.setState ({
          workflowFourthCircleFadeIn: true,
        });
      }, 500);
      setTimeout(() => {
        this.setState ({
          workflowGraphTextFadeIn: true,
        });
      }, 600);
      setTimeout(() => {
        this.setState ({
          workflowButtonFadeIn: true,
        });
      }, 800);
      setTimeout(() => {
        this.setState ({
          workflowCircleTitles: true,
        });
      }, 1000);
      setTimeout(() => {
        this.setState ({
          workflowRepeatArrow: true,
        });
      }, 1200);
      setTimeout(() => {
        this.setState ({
          workflowFirstArrow: true,
        });
      }, 1400);
      setTimeout(() => {
        this.setState ({
          workflowSecondArrow: true,
        });
      }, 1600);
      setTimeout(() => {
        this.setState ({
          workflowThirdArrow: true,
        });
      }, 1800);
      setTimeout(() => {
        this.setState ({
          workflowFourthArrow: true,
        });
      }, 2000);
    } else {
      return
    }
  }

  render() {

    window.addEventListener('scroll', this.addScrollingClasses);

    return (
      <div id="workflow">
        <div id="workflow-anchor"/>
        <div className="workflow-separator">
          <div className="workflow-gradient"/>
        </div>
        <div className="section-detail-left"/>
        <div className="visual-page-green-container">
          <div className="section-ribbon">
            <h1>Workflow</h1>
          </div>
          <div className="workflow-container">
            <div className={"title-container " + (this.state.workflowTitleFadeIn ? "show" : "hide")}>
              <h1 className="title-text">Small sprints, big results</h1>
            </div>
            <div className={"subheading-container " + (this.state.workflowSubTitleFadeIn ? "show" : "hide")}>
              <h2 className="subheading-text">When I work on a project I like the <span className="spanmainbackground">lean</span> methodology using <span className="spanmainbackground">sprints</span>.</h2>
            </div>
            <div className="workflow-graph-container">
              <div className="picture-container">
                <div className="step order-1">
                  <div className="step-title">
                    <h2 className={"title-text " + (this.state.workflowCircleTitles ? "show" : "hide")}>Define</h2>
                  </div>
                  <div className={"step-circle " + (this.state.workflowFirstCircleFadeIn ? "show-matrix" : "hide")}>
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrow order-2">
                  <div className={"arrow-right " + (this.state.workflowFirstArrow ? "show" : "hide")}>
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                  <div className={"arrow-right-smallest " + (this.state.workflowFirstArrow ? "show" : "hide")}>
                    <img src={arrowrightsmall} height="10" width="117" alt='icon' />
                  </div>
                  <div className={"arrow-right-smallest-2 " + (this.state.workflowFirstArrow ? "show" : "hide")}>
                    <img src={arrowrightsmall} height="10" width="77" alt='icon' />
                  </div>
                </div>
                <div className="step order-3">
                  <div className="step-title">
                    <h2 className={"title-text " + (this.state.workflowCircleTitles ? "show" : "hide")}>Build</h2>
                  </div>
                  <div className={"step-circle " + (this.state.workflowSecondCircleFadeIn ? "show-matrix" : "hide")}>
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrowright-bigscreen order-4">
                  <div className={"arrow-right-bigscreen " + (this.state.workflowSecondArrow ? "show" : "hide")}>
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                </div>
                <div className={"arrowup-smallscreen " + (this.state.workflowFourthArrow ? "show" : "hide")}>
                  <div className="arrow-up">
                    <img src={arrowup} height="87" width="10" alt='icon' />
                  </div>
                </div>
                <div className={"arrowup-smallscreen-2 " + (this.state.workflowFourthArrow ? "show" : "hide")}>
                  <div className="arrow-up">
                    <img src={arrowup} height="60" width="10" alt='icon' />
                  </div>
                </div>
                <div className="filling-div" />
                <div className={"arrowdown-smallscreen " + (this.state.workflowSecondArrow ? "show" : "hide")}>
                  <div className="arrow-down">
                    <img src={arrowdown} height="154" width="10" alt='icon' />
                  </div>
                </div>
                <div className={"arrowdown-smallscreen-2 " + (this.state.workflowSecondArrow ? "show" : "hide")}>
                  <div className="arrow-down">
                    <img src={arrowdown} height="107" width="10" alt='icon' />
                  </div>
                </div>
                <div className="step order-5">
                  <div className="step-title">
                    <h2 className={"title-text " + (this.state.workflowCircleTitles ? "show" : "hide")}>Launch</h2>
                  </div>
                  <div className={"step-circle " + (this.state.workflowThirdCircleFadeIn ? "show-matrix" : "hide")}>
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrow order-6">
                  <div className={"arrow-right-bigscreen " + (this.state.workflowThirdArrow ? "show" : "hide")}>
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                  <div className={"arrow-left " + (this.state.workflowThirdArrow ? "show" : "hide")}>
                    <img src={arrowleft} height="10" width="154" alt='icon' />
                  </div>
                  <div className={"arrow-left-smallest " + (this.state.workflowThirdArrow ? "show" : "hide")}>
                    <img src={arrowleftsmall} height="10" width="117" alt='icon' />
                  </div>
                  <div className={"arrow-left-smallest-2 " + (this.state.workflowThirdArrow ? "show" : "hide")}>
                    <img src={arrowleftsmall} height="10" width="77" alt='icon' />
                  </div>
                </div>
                <div className="step order-7">
                  <div className="step-title">
                    <h2 className={"title-text " + (this.state.workflowCircleTitles ? "show" : "hide")}>Analyze</h2>
                  </div>
                  <div className={"step-circle " + (this.state.workflowFourthCircleFadeIn ? "show-matrix" : "hide")}>
                    <div className="middle-circle"></div>
                  </div>
                </div>
              </div>
              <div className="repeat-container">
                <div className={"repeat-picture " + (this.state.workflowRepeatArrow ? "show" : "hide")}>
                  <img src={repeat} alt='icon' />
                </div>
              </div>
              <div className={"graphText-container " + (this.state.workflowRepeatArrow ? "show" : "hide")}>
                <h2 className="graph-text">2 weeks sprint</h2>
                <h2 className="graph-text">Repeat</h2>
              </div>
            </div>
            <div className="secondGraphText-container">
                <h2 className={"graph-second-text " + (this.state.workflowGraphTextFadeIn ? "show" : "hide")}>Everyday i want to learn something new that i can add to my knowledge, So that I can strive for perfection. I do this by mixing <span className="spanmainbackground">different methodologies</span>. The method for a project is just the <span className="spanmainbackground">starting point</span>.</h2>
                  <div className={(this.state.workflowButtonFadeIn ? "show" : "hide")}>
                    <Button 
                      color="red"
                      buttonText="Let's work together"
                      buttonHref="mailto:emil@emilottosson.com"
                    />
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workflow;
