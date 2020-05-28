import React, { Component } from 'react';
import './BrawlGaming.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import brawlgaming from '../../../pngs/brawlgaming.png';

class BrawlGaming extends Component {

  componentDidMount(){
    document.title = "Emil Ottosson | Brawl Gaming"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar 
          mainColor="green"
        />
        <ProjectTemplate 
          mainColor="green"
          backgroundImage={{backgroundImage: `url(${brawlgaming})`}}
          nextProjectBackgroundColor="red"
          nextProjectName="Ingrids"
          homepageButtonColor="purple"
          homepageButtonText="Back to the homepage"
          homepageButtonHref="/"
          nextButtonColor="green"
          nextButtonText="Read the case study"
          nextButtonHref="/ingrids"
        />
      </div>
    )
  }
}

export default BrawlGaming;
