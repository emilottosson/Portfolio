import React, { Component } from 'react';
import './Workflow.css';
import build from '../../svgs/build.svg';
import launch from '../../svgs/launch.svg';
import analyze from '../../svgs/analyze.svg';
import arrowright from '../../svgs/arrow-right.svg';
import arrowleft from '../../svgs/arrow-left.svg';
import arrowleftsmall from '../../svgs/arrow-left-small.svg';
import arrowrightsmall from '../../svgs/arrow-right-small.svg';
import arrowup from '../../svgs/arrow-up.svg';
import arrowdown from '../../svgs/arrow-down.svg';
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
              <h1 className="title-text">Small sprints, big results</h1>
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
                    <img src={questionmark} className="questionmark" height="70" width="70" alt='icon' />
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                  <div className="arrow-right-smallest">
                    <img src={arrowrightsmall} height="10" width="50" alt='icon' />
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
                <div className="arrowright-bigscreen">
                  <div className="arrow-right-bigscreen">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                </div>
                <div className="arrowup-smallscreen">
                  <div className="arrow-up">
                    <img src={arrowup} height="87" width="10" alt='icon' />
                  </div>
                </div>
                <div className="filling-div">

                </div>
                <div className="arrowdown-smallscreen">
                  <div className="arrow-down">
                    <img src={arrowdown} height="87" width="10" alt='icon' />
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
                  <div className="arrow-right-bigscreen">
                    <img src={arrowright} height="10" width="87" alt='icon' />
                  </div>
                  <div className="arrow-left">
                    <img src={arrowleft} height="10" width="87" alt='icon' />
                  </div>
                  <div className="arrow-left-smallest">
                    <img src={arrowleftsmall} height="10" width="50" alt='icon' />
                  </div>
                </div>
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Analyze</h2>
                  </div>
                  <div className="step-circle">
                  <img src={analyze} height="70" width="70" alt='icon' />
                  </div>
                </div>
              </div>
              <div className="repeat-container">
                <img src={repeat} alt='icon' />
              </div>
              <div className="graphText-container">
                <h2 className="graph-text">2 weeks sprint</h2>
                <h2 className="graph-text">Repeat</h2>
              </div>
              <div className="secondGraphText-container">
                <h2 className="graph-second-text">Everyday i want to learn something new that i can add to my knowledge, So that I can strive for perfection. I do this by mixing <span className="spandarkgray">different methodologies</span>. The method for a project is just the <span className="spandarkgray">starting point</span>.</h2>
              </div>
              <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn">Let´s work together</button></a>
            </div>
          </div>
        </div>
    )
  }
}

export default Workflow;
