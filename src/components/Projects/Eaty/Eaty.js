import React, { Component } from 'react';
import './Eaty.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import eaty from '../../../pngs/eaty.png';

class Eaty extends Component {

    componentDidMount(){
        document.title = "Emil Ottosson | Eaty"
    }

  render() {

    return (
      <div>
        <ProjectsNavbar 
          mainColor="purple"
        />
        <ProjectTemplate 
          mainColor="purple"
          backgroundImage={{backgroundImage: `url(${eaty})`}}
          nextProjectBackgroundColor="green"
          nextProjectName="Brawl Gaming"
          homepageButtonColor="red"
          homepageButtonText="Back to the homepage"
          homepageButtonHref="/"
          nextButtonColor="purple"
          nextButtonText="Read the case study"
          nextButtonHref="/brawlgaming"
        />
      </div>
    )
  }
}

export default Eaty;
