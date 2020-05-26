import React, { Component } from 'react';
import './Ingrids.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';

class Ingrids extends Component {

  componentDidMount(){
      document.title = "Emil Ottosson | Ingrids"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar />
        <ProjectTemplate 

        />
      </div>
    )
  }
}

export default Ingrids;
