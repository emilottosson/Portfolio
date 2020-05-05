import React, { Component } from 'react';
import './HamburgerMenu.css';
import Resume from "../../pdfs/Emil-Ottosson-Resume-Dark.pdf";
import { Link } from "react-scroll";
import $ from 'jquery';

class HamburgerMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bodyOverflowToggle: false,
      scrollDisabled: false,
      count: 0,
    };

    this.count = 0;
    this.$body = $('body');
    this.scrollTop = 0;
  }

  componentDidMount() {
    $('.toggle-button-container').on('click', this.toggleScroll);
    $('.menu-text-small').on('click', this.toggleScroll);
    $('.navbar-logo').on('click', this.removeClassOnBody);
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

  render() {
    return (
      <div className={"navbar-small " + (this.props.shown ? "shown" : "")}>
        <div className={"menu-container-small " + (this.props.shown ? "shown" : "")}>
          <Link activeClass="active" className="menu-text-small" to="workflow-anchor" spy={true} smooth={true} offset= {-55} duration= {500} onClick={this.props.toggle}>
              Workflow
            </Link>
            <Link activeClass="active" className="menu-text-small" to="portfolio" spy={true} smooth={true} offset= {-55} duration= {500} onClick={this.props.toggle}>
              Portfolio
            </Link>
            <Link activeClass="active" className="menu-text-small" to="about-container" href="about.js#top" spy={true} smooth={true} offset= {-55} duration= {500} onClick={this.props.toggle}>
              About
            </Link>
            <Link activeClass="active" className="menu-text-small" to="articles" href="about.js#top" spy={true} smooth={true} offset= {-55} duration= {500} onClick={this.props.toggle}>
              Articles
            </Link>
          <a className="menu-text-small" onClick={this.props.toggle} href={Resume} target="_blank">Resume</a>
          <a className="menu-text-small" onClick={this.props.toggle} href="mailto:emil@emilottosson.com">Contact Me</a>
        </div>
      </div>
    );
  }
}


export default HamburgerMenu;
