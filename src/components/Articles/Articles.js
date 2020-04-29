import React, { Component } from 'react';
import './Articles.css';

class Articles extends Component {

  render() {
    return (
      // Portfolio section
      <div id="articles">
        <div className="section-detail-left"/>
        <div className="articles-container">
        <div className="visual-page-red-container">
          <div className="section-ribbon">
            <h1>Latest Article</h1>
          </div>
          <div className="article-container">
            <div className="title-container">
              <h3 className="title-text">Social login authentication with OAuth2.</h3>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">A step by step guide on how to make a login authentication with GitHub. The purpose of this guide is to create a simple web application, with a linked database, where a user can log in via a social network.</h2>
            </div>
            <a type="button" className="btn-purple" href="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c" target="_blank" rel="noopener noreferrer">Read the article</a>
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
            <a type="button" className="btn-green" href="https://medium.com/@emilottosson/social-login-authentication-with-oauth2-d68f7ac3d11c" target="_blank" rel="noopener noreferrer">Read the case study</a>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Articles;
