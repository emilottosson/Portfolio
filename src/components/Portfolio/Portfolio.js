import React, { Component } from 'react';
import './Portfolio.css';
import ProjectBlockBig from '../ProjectBlockBig/ProjectBlockBig';
import ProjectBlockSmall from '../ProjectBlockSmall/ProjectBlockSmall';
import ProjectEndBlock from '../ProjectEndBlock/ProjectEndBlock';
import ingrids from '../../pngs/ingrids.png';
import eaty from '../../pngs/eaty.png';
import brawlGaming from '../../pngs/brawlgaming.png';

class Portfolio extends Component {

  render() {

    return (
      <div id="portfolio">
        <div className="section-detail-right"/>
        <div className="projects-container">
          <div className="project-blocks-wrapper">
          <ProjectBlockBig 
            projectTitle="Ingrids" 
            backgroundImage={{backgroundImage: `url(${ingrids})`}}
          />
          </div>
          <div className="project-blocks-wrapper-grid">
          <ProjectBlockSmall 
            projectTitle="Eaty"
            backgroundImage={{backgroundImage: `url(${eaty})`}}
          />
          <ProjectBlockSmall 
            projectTitle="Brawl Gaming" 
            backgroundImage={{backgroundImage: `url(${brawlGaming})`}}
            fontSize={{fontSize: '33px'}}
          />
          </div>
          <div className="project-blocks-wrapper">
            <ProjectEndBlock />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
