import React, { Component } from 'react';
import './Eaty.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import eaty from '../../../pngs/eaty/eaty-banner.png';
import eatyHome from '../../../pngs/eaty/eaty-home.png';
import eatyJoin from '../../../pngs/eaty/eaty-join.png';
import eatyOrders from '../../../pngs/eaty/eaty-orders.png';
import eatyRestaurant from '../../../pngs/eaty/eaty-restaurant.png';
import eatyCheckout from '../../../pngs/eaty/eaty-checkout.png';
import eatyDashboard from '../../../pngs/eaty/eaty-dashboard.png';
import Button from '../../Button/Button';

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
          content={
            <div className="wrapper">
              <section id="desc">
                <div className="content">
                  <h1>Eaty</h1>
                  <h2 className="purple">Eaty is a <span className="greenText">website</span> and <span className="greenText">mobile application</span> with focus on <span className="greenText">home delivery of food</span>, from all kind of restaurants. 
                  Their key features are <span className="greenText">in-time deliveries</span> to the door and a good customer support. In an attempt to expand, considering the big competitors, 
                  Eaty wanted to make a <span className="greenText">new design and features</span> for their website, app and staff dashboard in a way that would generate a <span className="greenText">better user experience</span>. </h2>
                </div>
              </section>
              <section id="challenge" className="green">
                <div className="content">
                  <h1 className="main">Target and challenge</h1>
                  <h2 className="textOnGreen">Eaty's website was just getting started, so it needed to be completed with all the <span className="mainText">key features</span>. 
                  <span className="mainText">Finding restaurants</span>, <span className="mainText">placing orders</span> and getting <span className="mainText">delivery information</span> in a simple way was the <span className="mainText">customer's greatest need</span>. 
                  The other goal was to redesign the dashboard, just to get a <span className="mainText">better overview</span>, for the staff to see details of the orders from today, 
                  last month and last year.</h2>
                </div>
              </section>
              <section id="problem">
                <div className="content">
                  <h1>Problems solved</h1>
                  <h2 className="green margin-bottom">It was nothing more than just <span className="redText">reading information</span> that the customers could do on the website, 
                  other than <span className="redText">downloading the app</span>. Neither did they like the <span className="redText">visual appearance</span> of the website in its current stage.</h2>
                  <h2 className="green margin-top-none">To <span className="redText">increase orders</span> generated from the website, all of the pages got implemented with the <span className="redText">correct 
                  features</span> and information. A new, <span className="redText">more pleasurable</span> way to display the data on the dashboard got implemented.</h2>
                </div>
              </section>
              <section id="outcome" className="red">
                <div className="content">
                  <h1 className="main">Outcomes and achievements</h1>
                  <h2 className="textOnRed">As for the website, all the solutions, the design and the code got showed for the CEO and other staff members. 
                  They got <span className="mainText">excited</span> over the outcome. To be able to go live, the company sent the code to their <span className="mainText">back-end developers</span> to complete all of 
                  the connections between the back-end and front-end. The staff got a <span className="mainText">better understanding</span> on how the orders went from day to day.</h2>
                </div>
              </section>
              <section id="details">
                <div className="content">
                  <h3 className="darkgray">Welcome screen</h3>
                  <h2 className="red margin-bottom">The welcome screen shows the <span className="purpleText">current city</span> you are searching restaurants from (this can be changed) 
                  as well as <span className="purpleText">popular/new restaurants</span>. Further down the page you will find categories and a form that restaurants can use if they <span className="purpleText">want to join</span> Eaty.</h2>
                  <div className="row-content double-column-full">
                    <article>
                      <img src={eatyHome} alt="welcome" />
                    </article>
                    <article>
                      <img src={eatyJoin} alt="join" />
                    </article>
                  </div>
                  <h3 className="darkgray">The account</h3>
                  <h2 className="red margin-bottom"><span className="purpleText">Orders</span> that a customer have made can be reached on their own personal <span className="purpleText">account page</span>.</h2>
                  <div className="row-content">
                    <article>
                      <img src={eatyOrders} alt="orders" />
                    </article>
                  </div>
                  <h3 className="darkgray">The order</h3>
                  <h2 className="red margin-bottom">The section where you create your order shows <span className="purpleText">information</span> about the restaurant and their dishes as well as prices. 
                  Dishes can be <span className="purpleText">filtered</span> by <span className="purpleText">food category</span>.</h2>
                  <div className="row-content double-column-full">
                    <article>
                      <img src={eatyRestaurant} alt="products" />
                    </article>
                    <article>
                      <img src={eatyCheckout} alt="checkout" />
                    </article>
                  </div>
                  <h3 className="darkgray">The dashboard</h3>
                  <h2 className="red margin-bottom">The dashboard screen shows <span className="purpleText">statistics</span> for sales, 
                  orders and other main data that has been provided for the company.</h2>
                  <div className="row-content">
                    <article>
                      <img src={eatyDashboard} alt="dashboard" />
                    </article>
                  </div>
                </div>
              </section>
              <section id="responsibilities" className="purple">
                <div className="content">
                  <h1 className="main">Responsibilities</h1>
                  <h2 className="textOnPurple">I worked on this project as a <span className="mainText">UI/UX designer</span> and <span className="mainText">Front-end developer</span>.<br/><br/>
                    Main areas of responsibility:<br/>
                    - <span className="mainText">Design</span> (website)<br/>
                    - <span className="mainText">Lo-fi prototyping</span> (basic flow and interactions)<br/>
                    - <span className="mainText">Hi-fi prototyping</span> (flow and interactions)<br/>
                    - <span className="mainText">Front-end development</span> (website, dashboard)
                  </h2>
                </div>
              </section>
              <section id="prototype">
                <div className="content">
                  <h1 className="darkgray">The website</h1> {/* "The webapp" can be the name instead of "The final prototype" */}
                  <h2 className="purple">A website was developed. Since the company got into the process of <span className="greenText">being sold</span>, 
                  the site never went live. Would you like to have a look on it?</h2>
                  {/* "Learn more about Ingrids" can be the name instead of "Let's meet together" on the button below */}
                  <div className="margin-top">
                    <Button 
                      color="green"
                      buttonText= "Let's meet together" 
                      buttonHref="mailto:emil@emilottosson.com"
                    />
                  </div>
                </div>
              </section>
            </div>
          }
        />
      </div>
    )
  }
}

export default Eaty;
