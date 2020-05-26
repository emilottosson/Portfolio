import React, { Component } from 'react';
import './BrawlGaming.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';

class BrawlGaming extends Component {

  componentDidMount(){
    document.title = "Emil Ottosson | Brawl Gaming"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar />
        <ProjectTemplate 
          projectTitle="Brawl Gaming"
        />
      </div>
    )
  }
}

export default BrawlGaming;
