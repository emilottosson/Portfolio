import React, { Component } from 'react';
import './Workflow.css';
import build from '../../svgs/build1.svg';
import launch from '../../svgs/launch1.svg';
import analyse from '../../svgs/analyse1.svg';
import arrowright from '../../svgs/arrow-right.svg';
import arrowleft from '../../svgs/arrow-left.svg';
import questionmark from '../../svgs/questionmark.svg';
import repeat from '../../svgs/repeat.svg';

class Workflow extends Component {
  render() {
    return (
      // Workflow section
      <div id="workflow">
        {/* Workflow content container */}
        <div className="workflow-container">
            <div className="title-container">
              <h1>Small sprints, big results</h1>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">When I work on a project I like the <span className="spandarkgray">lean</span> methodology using <span className="spandarkgray">sprints</span>.</h2>
            </div>
            <div className="workflow-graph-container">
              <div className="picture-container">
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Define</h2>
                  </div>
                  <div className="step-circle">
                    <img src={questionmark} className="questionmark" height="100" width="100" alt='icon' />
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                </div>
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Build</h2>
                  </div>
                  <div className="step-circle">
                    <img src={build} height="70" width="70" alt='icon' />
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                </div>
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Launch</h2>
                  </div>
                  <div className="step-circle">
                  <img src={launch} height="70" width="70" alt='icon' />
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                  <div className="arrow-left">
                    <img src={arrowleft} height="10" width="87" alt='icon' />
                  </div>
                </div>
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Analyse</h2>
                  </div>
                  <div className="step-circle">
                  <img src={analyse} height="70" width="70" alt='icon' />
                  </div>
                </div>
              </div>
              <div className="repeat-container">
                <img src={repeat} alt='icon' />
              </div>
              <div className="graphText-container">
                <h2 className="graph-text">2 weeks sprints</h2>
                <h2 className="graph-text">Repeat</h2>
              </div>
            </div>
            <div className="secondGraphText-container">
                <h2 className="graph-second-text">Everyday i want to learn something new that i can add to my knowledge, So that I can strive for perfection. I do this by mixing <span className="spandarkgray">different methodologies</span>. The method for a project is just the <span className="spandarkgray">starting point</span>.</h2>
            </div>
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn">Let´s work together</button></a>
          </div>
        </div>
    )
  }
}

export default Workflow;
