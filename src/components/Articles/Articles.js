import React, { Component } from 'react';
import './Articles.css';
import Button from '../Button/Button';

class Articles extends Component {

  constructor(props) {
    super(props)
    this.state = {
        latestArticleTitle: false,
        latestArticleText: false,
        latestArticleButton: false,
        inDepthTitle: false,
        inDepthText: false,
        inDepthButton: false,
    };
  }

  addScrollingClasses = () => {
  var browserHeight = window.innerHeight;
  var offsets = document.getElementById("articles").getBoundingClientRect();
  var offsetsSecond = document.getElementById("visual-page-purple-container").getBoundingClientRect();
  if (offsets.top <= browserHeight/2) {
    this.setState ({
      latestArticleTitle: true,
    });
    setTimeout(() => {
    this.setState ({
      latestArticleText: true,
    });
    }, 200);
    setTimeout(() => {
    this.setState ({
      latestArticleButton: true,
    });
    }, 400);
    } else {
      return
    }

    if (offsetsSecond.top <= browserHeight/2) {
      this.setState ({
        inDepthTitle: true,
      });
      setTimeout(() => {
      this.setState ({
        inDepthText: true,
      });
      }, 200);
      setTimeout(() => {
      this.setState ({
        inDepthButton: true,
      });
      }, 400);
      } else {
        return
    }
  }

  render() {

    window.addEventListener('scroll', this.addScrollingClasses);

    return (
      <div id="articles">
        <div className="section-detail-left"/>
        <div className="articles-container">
          <div className="visual-page-red-container">
            <div className="section-ribbon">
              <h1>Latest Article</h1>
            </div>
          <div className="article-container">
            <div className="title-container">
              <h3 className={(this.state.latestArticleTitle ? "show" : "hide")}>Social login authentication with OAuth2.</h3>
            </div>
            <div className="subheading-container">
              <h2 className={"subheading-text " + (this.state.latestArticleText ? "show" : "hide")}>A step by step guide on how to make a login authentication with GitHub. The purpose of this guide is to create a simple web application, with a linked database, where a user can log in via a social network.</h2>
            </div>
            <div className={(this.state.latestArticleButton ? "show" : "hide")}>
              <Button 
                  color="purple"
                  buttonText="Read the article"
                  buttonHref="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c"
              />
            </div>
          </div>
        </div>
        <div id="visual-page-purple-container">
          <div className="section-ribbon">
            <h1>In depth</h1>
          </div>
          <div className="article-container">
            <div className="title-container">
              <h3 className={"title-text " + (this.state.inDepthTitle ? "show" : "hide")}>Social login authentication with OAuth2.</h3>
            </div>
            <div className="subheading-container">
              <h2 className={"subheading-text " + (this.state.inDepthText ? "show" : "hide")}>A step by step guide on how to make a login authentication with GitHub. The purpose of this guide is to create a simple web application, with a linked database, where a user can log in via a social network.</h2>
            </div>
            <div className={(this.state.inDepthButton ? "show" : "hide")}>
              <Button 
                color="green"
                buttonText="Read the case study"
                buttonHref="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Articles;
