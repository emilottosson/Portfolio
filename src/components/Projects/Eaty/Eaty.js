import React, { Component } from 'react';
import './Eaty.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';

class Eaty extends Component {

    componentDidMount(){
        document.title = "Emil Ottosson | Eaty"
    }

  render() {

    return (
      <div>
        <ProjectsNavbar />
        <ProjectTemplate 
          projectTitle="Eaty"
        />
      </div>
    )
  }
}

export default Eaty;
