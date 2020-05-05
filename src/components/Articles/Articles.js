import React, { Component } from 'react';
import './Articles.css';
import Button from '../Button/Button';

class Articles extends Component {

  render() {
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
              <h3>Social login authentication with OAuth2.</h3>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">A step by step guide on how to make a login authentication with GitHub. The purpose of this guide is to create a simple web application, with a linked database, where a user can log in via a social network.</h2>
            </div>
            <Button 
                color="purple"
                buttonText="Read the article"
                buttonHref="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c"
            />
          </div>
        </div>
        <div className="visual-page-purple-container">
          <div className="section-ribbon">
            <h1>In depth</h1>
          </div>
          <div className="article-container">
            <div className="title-container">
              <h3 className="title-text">Social login authentication with OAuth2.</h3>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">A step by step guide on how to make a login authentication with GitHub. The purpose of this guide is to create a simple web application, with a linked database, where a user can log in via a social network.</h2>
            </div>
            <Button 
              color="green"
              buttonText="Read the case study"
              buttonHref="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c"
            />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Articles;
