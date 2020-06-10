import React, { Component } from 'react';
import './BrawlGaming.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import brawlgaming from '../../../pngs/brawlgaming/bg-banner.png';
import brawlgamingConfirmation from '../../../pngs/brawlgaming/bg-confirmation.png';
import brawlgamingDeposit from '../../../pngs/brawlgaming/bg-deposit.png';
import brawlgamingDownload from '../../../pngs/brawlgaming/bg-download.png';
import brawlgamingHome from '../../../pngs/brawlgaming/bg-home.png';
import brawlgamingLobby from '../../../pngs/brawlgaming/bg-lobby.png';
import brawlgamingMatch from '../../../pngs/brawlgaming/bg-match.png';
import brawlgamingWebsite from '../../../pngs/brawlgaming/bg-website.png';
import Button from '../../Button/Button';

class BrawlGaming extends Component {

  componentDidMount(){
    document.title = "Emil Ottosson | Brawl Gaming"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar 
          mainColor="green"
        />
        <ProjectTemplate 
          mainColor="green"
          backgroundImage={{backgroundImage: `url(${brawlgaming})`}}
          nextProjectBackgroundColor="red"
          nextProjectName="Ingrids"
          homepageButtonColor="purple"
          homepageButtonText="Back to the homepage"
          homepageButtonHref="/"
          nextButtonColor="green"
          nextButtonText="Read the case study"
          nextButtonHref="/ingrids"
          content={
            <div className="wrapper">
              <section id="desc">
                <div className="content">
                  <h1>Brawl Gaming</h1>
                  <h2 className="green">Brawl Gaming is an <span className="redText">e-sport platform</span> that provides the opportunity for gamers, <span className="redText">over the age of 18</span>, 
                  to play performance-based games online for the chance to <span className="redText">win money</span>. On the platform, a big focus is to prevent users from establishing a 
                  <span className="redText">gambling addiction</span>. The main goal is to enhance the normal day-to-day <span className="redText">gaming experience</span>.</h2>
                </div>
              </section>
              <section id="challenge" className="red">
                <div className="content">
                  <h1 className="main">Target and challenge</h1>
                  <h2 className="textOnRed">Main goal for the platform was to <span className="mainText">enhance gaming experiences</span>, while at the same time, 
                  having chance to <span className="mainText">win money</span> on own performance.. Since money is involved, Brawl Gaming needs to be <span className="mainText">safe and smooth</span> when it comes to <span className="mainText">transactions</span>, 
                  otherwise the users wont stay for long. A big challenge is how to <span className="mainText">prevent problem gambling</span> in the best way possible, this is a important 
                  subject for the company. At last, Same as for all games, how could <span className="mainText">cheating</span> be prevented?</h2>
                </div>
              </section>
              <section id="problem">
                <div className="content">
                  <h1>Problems solved</h1>
                  <h2 className="red margin-bottom">A gamer, who’s <span className="purpleText">not in the pro scene</span>, have not been able to play and <span className="purpleText">earn money</span> on their gaming performance. 
                  Since the start of the project, a few other services have made this possible in a similar way, all in a <span className="purpleText">beta stage</span>. 
                  Neither of them have had a fully <span className="purpleText">automated payment system</span>, a lot of <span className="purpleText">different game modes</span> nor a good focus on preventing <span className="purpleText">gambling addiction</span>.</h2>
                  <h2 className="red margin-top-none">To enhance the <span className="purpleText">user experience</span>, a <span className="purpleText">fully automated</span> payment system have been implemented. 
                  This have been done through APIs from a local bank. 1v1, 2v2, 5v5 and tournaments have been added as <span className="purpleText">game modes</span> on the first game. 
                  The work on how to prevent <span className="purpleText">problem gambling</span> has started as well as adding <span className="purpleText">digital coaching</span> that can take the users skills to another level.</h2>
                </div>
              </section>
              <section id="outcome" className="purple">
                <div className="content">
                  <h1 className="main">Outcomes and achievements</h1>
                  <h2 className="textOnPurple">The desktop application has not been <span className="mainText">released</span> yet. But during the developing process, 
                  Brawl Gaming has attending a lot of <span className="mainText">tech events</span> and been doing <span className="mainText">several pitches</span> for people with a good influence in the topic, 
                  all with hyped response. In 2018, as part of the Uminova Innovation Startup program, the business idea first got pitched in front 
                  of a jury and then later on the big stage during <span className="mainText">Umeå Tech Arena</span>. Brawl Gaming won <span className="mainText">second place</span> and received a scholarship with a 
                  value of 10.000SEK issued by Nordea Bank.</h2>
                </div>
              </section>
              <section id="details">
                <div className="content">
                  <h3 className="darkgray">Welcome screen</h3>
                  <h2 className="purple margin-bottom">The welcome screen shows <span className="greenText">news</span> from Brawl Gaming, information about <span className="greenText">connected games</span> (how many gamers are playing right now) 
                  as well as <span className="greenText">latest winners</span> from the latest completed matches.</h2>
                  <div className="row-content">
                    <article>
                      <img src={brawlgamingHome} alt="home" />
                    </article>
                  </div>
                  <h3 className="darkgray">The lobby</h3>
                  <h2 className="purple margin-bottom">The section where you create a lobby are showing <span className="greenText">game settings</span> (game mode, map, bet amount etc). 
                  From here you can choose to search alone or <span className="greenText">invite friends</span>. <span className="greenText">Estimated time</span> until game are showing up under the chat after a user have 
                  started the search.</h2>
                  <div className="row-content">
                    <article>
                      <img src={brawlgamingLobby} alt="lobby" />
                    </article>
                  </div>
                  <div className="row-content">
                    <article>
                      <img src={brawlgamingMatch} alt="match" />
                    </article>
                  </div>
                  <h3 className="darkgray">Deposit</h3>
                  <h2 className="purple margin-bottom">When making a <span className="greenText">deposit</span>, a page will appear asking for <span className="greenText">card information</span>. 
                  If the payment succeeds, a <span className="greenText">confirmation</span> about the deposit will appear.</h2>
                  <div className="row-content double-column-full">
                    <article>
                      <img src={brawlgamingDeposit} alt="deposit" />
                    </article>
                    <article>
                      <img src={brawlgamingConfirmation} alt="confirmation" />
                    </article>
                  </div>
                  <h3 className="darkgray">Website</h3>
                  <h2 className="purple margin-bottom">From the website you can read about the <span className="greenText">concept</span> and <span className="greenText">FAQ</span> as well as <span className="greenText">downloading</span> the desktop application for both Mac and Windows (Not available yet).</h2>
                  <div className="row-content double-column-full">
                    <article>
                      <img src={brawlgamingWebsite} alt="website home" />
                    </article>
                    <article>
                      <img src={brawlgamingDownload} alt="downloading" />
                    </article>
                  </div>
                </div>
              </section>
              <section id="responsibilities" className="green">
                <div className="content">
                  <h1 className="main">Responsibilities</h1>
                  <h2 className="textOnGreen">I worked on this project as a <span className="mainText">UI/UX designer</span> and <span className="mainText">Full-stack developer</span>.<br/><br/>
                    Main areas of responsibility:<br/>
                    - <span className="mainText">Design</span> (iterations on the UI)<br/>
                    - <span className="mainText">Lo-fi prototyping</span> (application, website)<br/>
                    - <span className="mainText">Hi-fi prototyping</span> (application, website)<br/>
                    - <span className="mainText">Front-end development</span> (desktop application, website)
                    - <span className="mainText">Back-end development</span> (server, database)
                  </h2>
                </div>
              </section>
              <section id="prototype">
                <div className="content">
                  <h1 className="darkgray">The desktop app</h1> {/* "The webapp" can be the name instead of "The final prototype" */}
                  <h2 className="green">A <span className="redText">desktop application</span> was developed, currently moving toward its <span className="redText">beta stage</span>. 
                  The company has a lot going on right now and aiming to soon release the first beta version. 
                  If you want to take a look at the <span className="redText">current state</span> of the app or just want to <span className="redText">read more</span> about Brawl Gaming, follow the link below!</h2>
                  {/* "Learn more about Ingrids" can be the name instead of "Let's meet together" on the button below */}
                  <div className="margin-top">
                    <Button 
                      color="red"
                      buttonText= "Learn more about Brawl Gaming" 
                      buttonHref="https://brawlgaming.com/"
                      target="_blank"
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

export default BrawlGaming;
