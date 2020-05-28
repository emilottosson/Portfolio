import React, { Component } from 'react';
import './Ingrids.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import ingrids from '../../../pngs/ingrids.png';
import test1 from '../../../pngs/test1.png';
import test1small from '../../../pngs/test1small.png';
import test2 from '../../../pngs/test2.jpg';
import Button from '../../Button/Button';

class Ingrids extends Component {

  componentDidMount(){
      document.title = "Emil Ottosson | Ingrids"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar 
          mainColor="red"
        />
        <ProjectTemplate 
          mainColor="red"
          backgroundImage={{backgroundImage: `url(${ingrids})`}}
          nextProjectBackgroundColor="purple"
          nextProjectName="Eaty"
          homepageButtonColor="green"
          homepageButtonText="Back to the homepage"
          homepageButtonHref="/"
          nextButtonColor="red"
          nextButtonText="Read the case study"
          nextButtonHref="/eaty"
          content={
            <div className="wrapper">
              <section id="desc">
                <div className="content">
                  <h1>Ingrids</h1>
                  <h2 className="red">Cancare is an <span className="purpleText">on-demand</span> medical cannabis <span className="purpleText">delivery app</span>. The MVP, designed and developed in three months, includes 
                  a shipment real-time tracking. The App Store's strict review guidelines don't allow cannabis-related apps, so the product was <span className="purpleText">directly 
                  launched</span> on the market as a webapp, in order to <span className="purpleText">test the traction</span> and <span className="purpleText">validate the idea</span>.</h2>
                </div>
              </section>
              <section id="challenge" className="purple">
                <div className="content">
                  <h1 className="main">Target and challenge</h1>
                  <h2 className="textOnPurple">The <span className="mainText">user base</span> for this project consists of people in the 18-30 age range. The main requirements 
                  were <span className="mainText">transparency</span> and <span className="mainText">friendliness</span>. Univi needed to 
                  be <span className="mainText">easily understadable</span> by people without any specific knowledge regarding investment or saving strategies.</h2>
                </div>
              </section>
              <section id="problem">
                <div className="content">
                  <h1>Problems solved</h1>
                  <h2 className="purple margin-bottom">After some weeks of negotiation, the founder didn't reach an agreement with the dispensaries that were supposed to be 
                  part of the project. The image below shows the <span className="greenText">impact</span> that an issue like that would have on a <span className="greenText">normal release cycle</span>.</h2>
                  <img className="img-lg margin-bottom" src={test1} alt="test" />
                  <img className="img-sm margin-bottom" src={test1small} alt="test" />
                  <h2 className="purple margin-bottom">The founder decided to launch the app with just one partner. To <span className="greenText">differentiate</span> the product and <span className="greenText">stand out</span> 
                  from the competition, one month before deployment, we <span className="greenText">iterated</span> on the already available design, to find a new, compelling feature. That’s the 
                  moment we gave birth to the <span className="greenText">real-time tracking</span>.</h2>
                  <img className="img-lg margin-bottom" src={test1} alt="test" />
                  <img className="img-sm margin-bottom" src={test1small} alt="test" />
                  <h2 className="purple">This is a really clear example of how great it is to work with people who understand the importance of a <span className="greenText">loose scope</span>. 
                  A change of plans doesn't necessarily mean harmful, uncontrolled feature creep.</h2>
                </div>
              </section>
              <section id="outcome" className="green">
                <div className="content">
                  <h1 className="main">Outcomes and achievements</h1>
                  <h2 className="textOnGreen">Considering how rapidly the medical cannabis market segment is evolving, Cancare required a <span className="mainText">fast turn around</span>. 
                  The app got <span className="mainText">to the market</span> in just three months, and it was already winning over most competitors thanks to its <span className="mainText">usability</span> and <span className="mainText">reliability</span>. 
                  After a quick marketing campaign, the founders have been able to <span className="mainText">generate revenues from day one</span>.</h2>
                </div>
              </section>
              <section id="details">
                <div className="content">
                  <h3 className="darkgray">The main screens</h3>
                  <h2 className="green margin-bottom"><span className="redText">Shop</span>, <span className="redText">categories</span>, and <span className="redText">search</span>: colors, font sizes, and product listing layout were determined by running multiple <span className="redText">A/B tests</span>. 
                  For the listing, it turned out that a grid arrangement slightly <span className="redText">increased the conversions</span>, thanks to its professionally shot pictures.</h2>
                  <div className="row-content triple-column">
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                  </div>
                  <h3 className="darkgray">Details and cart</h3>
                  <h2 className="green margin-bottom">The <span className="redText">details</span> screen shows an accurate breakdown of the effects and pathologies treated by the specific strain. 
                  Those aspects can be also filtered from the listing screen itself. These specs were crucial to highlight the <span className="redText">medical connotations</span> of the app.</h2>
                  <div className="row-content double-column">
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                  </div>
                  <h3 className="darkgray">Details and cart</h3>
                  <h2 className="green margin-bottom">The <span className="redText">details</span> screen shows an accurate breakdown of the effects and pathologies treated by the specific strain. 
                  Those aspects can be also filtered from the listing screen itself. These specs were crucial to highlight the <span className="redText">medical connotations</span> of the app.</h2>
                  <div className="row-content four-column">
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                    <article>
                      <img src={test2} alt="test" />
                    </article>
                  </div>
                </div>
              </section>
              <section id="responsibilities" className="red">
                <div className="content">
                  <h1 className="main">Responsibilities</h1>
                  <h2 className="textOnRed">I worked on this project as a <span className="mainText">lead designer</span> and <span className="mainText">product manager</span>.<br/><br/>
                    Main areas of responsibility:<br/>
                    - <span className="mainText">Management</span> (sprint planning and weekly reviews)<br/>
                    - <span className="mainText">UX analysis</span> (flows and persona)<br/>
                    - <span className="mainText">Design</span> (apps and branding)<br/>
                    - <span className="mainText">Lo-fi prototyping</span> (basic flow and interactions)<br/>
                  </h2>
                </div>
              </section>
              <section id="prototype">
                <div className="content">
                  <h1 className="darkgray">The final prototype</h1> {/* "The webapp" can be the name instead of "The final prototype" */}
                  <h2 className="red">A lo-fi prototype was developed. It lacks of custom transitions and animations. By keeping it at this stage, 
                  we’ve been able to <span className="purpleText">test the idea</span> and <span className="purpleText">assess the risk points</span>, immediately. Would you like to have a look at it?</h2>
                  {/* "Learn more about Ingrids" can be the name instead of "Let's meet together" on the button below */}
                  <div className="margin-top">
                    <Button 
                      color="purple"
                      buttonText= "Let's meet together" 
                      buttonHref=""
                    />
                  </div>
                </div>
              </section>
            </div>
          }
        />
      </div>
    )
  }
}

export default Ingrids;
