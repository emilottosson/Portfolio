import React, { Component } from 'react';
import './ProjectsHamburgerMenu.css';
import Resume from "../../../pdfs/Emil-Ottosson-Resume.pdf";
import $ from 'jquery';

class ProjectsHamburgerMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bodyOverflowToggle: false,
      scrollDisabled: false,
      count: 0,
      navbarScroll: false,
    };

    this.count = 0;
    this.$body = $('body');
    this.scrollTop = 0;
  }

  componentDidMount() {
    $('.projects-toggle-button-container').on('click', this.toggleScroll);
    $('.projects-menu-text-small').on('click', this.toggleScroll);
    $('.projects-navbar-logo').on('click', this.removeClassOnBody);
  }

  removeClassOnBody = () => {
    if (this.count % 2 === 0) {
      return
    }
    this.scrollEnable()
    this.count++;
  }

  toggleScroll = () => {
    if (this.count % 2 === 0) {
      this.scrollDisable()
    } else {
      this.scrollEnable()
    }
    this.count++;
  }

  scrollDisable() {
    if (this.state.scrollDisabled) {
      return;
    }
    this.scrollTop = $(window).scrollTop();
    this.$body.addClass('noscroll')
      .css({
        top: -1 * this.scrollTop
    });
    this.setState ({
      scrollDisabled: true
    });
  }

  scrollEnable() {
    if (!this.state.scrollDisabled) {
        return;
    }
    this.$body.removeClass('noscroll')
    $(window).scrollTop(this.scrollTop);
    this.setState ({
      scrollDisabled: false
    });
  }

  toggleScrollingClasses = () => {
    var scroll = window.scrollY;
    if(scroll !== 0) {
      this.setState( {
        navbarScroll: true,
      });
    } else {
      this.setState( {
        navbarScroll: false,
      });
    }
  }

  render() {

    window.addEventListener('scroll', this.toggleScrollingClasses);

    return (
      <div className={"projects-navbar-small " + (this.props.shown ? "shown" : "") + (this.state.navbarScroll ? "" : ` ${this.props.mainColor}`)}>
        <div className={"projects-menu-container-small " + (this.props.shown ? "shown" : "")}>
          <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem1Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} href="/" onClick={this.props.toggle}>
              Workflow
            </a>
            <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem2Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} href="/" onClick={this.props.toggle}>
              Portfolio
            </a>
            <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem3Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} href="/" onClick={this.props.toggle}>
              About
            </a>
            <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem4Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} href="/" onClick={this.props.toggle}>
              Articles
            </a>
          <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem5Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} onClick={this.props.toggle} href={Resume} target="_blank">Resume</a>
          <a className={"projects-menu-text-small " + (this.props.hamburgerMenuItem6Shown ? "showItem" : "") + (this.state.navbarScroll ? " scrolled" : "")} onClick={this.props.toggle} href="mailto:emil@emilottosson.com">Contact Me</a>
        </div>
      </div>
    );
  }
}


export default ProjectsHamburgerMenu;
