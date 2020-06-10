import React, { Component } from 'react';
import './Portfolio.css';
import ProjectBlockBig from '../ProjectBlockBig/ProjectBlockBig';
import ProjectBlockSmall from '../ProjectBlockSmall/ProjectBlockSmall';
import ProjectEndBlock from '../ProjectEndBlock/ProjectEndBlock';
import ingrids from '../../pngs/ingrids/ingrids-banner.png';
import eaty from '../../pngs/eaty/eaty-banner.png';
import brawlGaming from '../../pngs/brawlgaming/bg-banner.png';

class Portfolio extends Component {

  render() {

    return (
      <div id="portfolio">
        <div className="section-detail-right"/>
        <div className="projects-container">
          <div className="project-blocks-wrapper">
          <ProjectBlockBig 
            order="first"
            projectTitle="Ingrids" 
            backgroundImage={{backgroundImage: `url(${ingrids})`}}
            overlayColor="red"
            buttonColor="purple"
            buttonText="Read more"
            projectText="I have from scratch, with big focus on the customer experience and smooth payments, 
              built the new e-commerce webshop for Ingrids specialaffär. I worked a lot with colors and fonts, 
              trying to give the webshop a clean and unique design."
            skills= {["Wordpress", "Woocommerce", "Web hosting", "HTML5", "CSS3"]}
            skillsTextColor="red"
            buttonHref="/ingrids"
          />
          </div>
          <div className="project-blocks-wrapper-grid">
          <ProjectBlockSmall 
            order="second"
            projectTitle="Eaty"
            backgroundImage={{backgroundImage: `url(${eaty})`}}
            overlayColor="purple"
            buttonColor="green"
            buttonText="Read more"
            projectText="With an agile process I developed the new website for EATY, 
              a company that handles delivery of food from different type of restaurants. 
              A major focus was on front-end functionality."
            skills= {["JavaScript", "PHP", "HTML5", "CSS3"]}
            skillsTextColor="purple"
            buttonHref="/eaty"
          />
          <div className="flex-separator" />
          <ProjectBlockSmall 
            order="third"
            projectTitle="Brawl Gaming" 
            backgroundImage={{backgroundImage: `url(${brawlGaming})`}}
            fontSize={{fontSize: '33px'}}
            overlayColor="green"
            buttonColor="red"
            buttonText="Read more"
            projectText="Brawl Gaming is an e-sport plattform developed by Source Empire AB, 
            a startup company created by me and some friends. I have been involved throughout 
            the process from idea to current beta version, working with the full-stack."
            skills= {["React", "JavaScript", "HTML5", "Sass", "JSON", "SQL", "Kotlin"]}
            skillsTextColor="green"
            buttonHref="/brawlgaming"
          />
          </div>
          <div className="project-blocks-wrapper">
            <ProjectEndBlock 
              backgroundColor="red"
              textColor="red"
              buttonColor="purple"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
