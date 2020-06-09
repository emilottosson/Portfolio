import React, { Component } from 'react';
import './Ingrids.css';
import ProjectTemplate from '../ProjectTemplate/ProjectTemplate';
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar';
import ingrids from '../../../pngs/ingrids/ingrids-banner.png';
import ingridsHome from '../../../pngs/ingrids/ingrids-home.png';
import ingridsOrders from '../../../pngs/ingrids/ingrids-orders.png';
import ingridsShop from '../../../pngs/ingrids/ingrids-shop.png';
import ingridsProduct from '../../../pngs/ingrids/ingrids-product.png';
import ingridsCart from '../../../pngs/ingrids/ingrids-cart.png';
import ingridsCheckout from '../../../pngs/ingrids/ingrids-checkout.png';
import Button from '../../Button/Button';

class Ingrids extends Component {

  componentDidMount(){
      document.title = "Emil Ottosson | Ingrids"
  }

  render() {

    return (
      <div>
        <ProjectsNavbar 
          mainColor="red"
        />
        <ProjectTemplate 
          mainColor="red"
          backgroundImage={{backgroundImage: `url(${ingrids})`}}
          nextProjectBackgroundColor="purple"
          nextProjectName="Eaty"
          homepageButtonColor="green"
          homepageButtonText="Back to the homepage"
          homepageButtonHref="/"
          nextButtonColor="red"
          nextButtonText="Read the case study"
          nextButtonHref="/eaty"
          content={
            <div className="wrapper">
              <section id="desc">
                <div className="content">
                  <h1>Ingrids</h1>
                  <h2 className="red">Ingrids specialaffär was established 1965 in Umeå and has since 1998 been selling underwear at Kungsgatan 51, Umeå. 
                  With increased <span className="purpleText">e-commerce</span> globally, Ingrids old webshop was in need of a <span className="purpleText">redesign</span>, including new <span className="purpleText">web hosting</span> and <span className="purpleText">payment contracts</span>. 
                  Excluding the <span className="purpleText">payment support</span>, the website was designed and developed in four month.</h2>
                </div>
              </section>
              <section id="challenge" className="purple">
                <div className="content">
                  <h1 className="main">Target and challenge</h1>
                  <h2 className="textOnPurple">Main goal for this webshop was to provide a <span className="mainText">good customer experience</span> and <span className="mainText">smooth payments</span>. 
                  A webshop that is nice to visit when it comes to <span className="mainText">visual experience</span>, something that feels <span className="mainText">unique</span> but <span className="mainText">recognizable</span>. 
                  Ingrids needed to be <span className="mainText">easily understandable</span> by people who are not used to online shopping.</h2>
                </div>
              </section>
              <section id="problem">
                <div className="content">
                  <h1>Problems solved</h1>
                  <h2 className="purple margin-bottom">Initially, it was difficult for the customers to both <span className="greenText">find products</span> on the webshop and <span className="greenText">complete their checkout</span>. 
                  Hoping their customers spend time to look around, or are used to online shopping is probably not a good solution.</h2>
                  <h2 className="purple margin-top-none">To <span className="greenText">avoid frustration</span> and <span className="greenText">increase customer experience</span>, the checkout and payment solution got 
                  <span className="greenText">simplified</span> with the help of new contracts from the external payment service. A new, <span className="greenText">more pleasurable</span> way to display and find 
                  products got implemented.</h2>
                </div>
              </section>
              <section id="outcome" className="green">
                <div className="content">
                  <h1 className="main">Outcomes and achievements</h1>
                  <h2 className="textOnGreen">After the launch, Ingrids quickly got a <span className="mainText">lot of response</span> on their social media on how great their new webshop was. 
                  Both <span className="mainText">user and visual experience</span> were things that were mentioned often. The staff <span className="mainText">facilitated their orders</span> as well as improved their <span className="mainText">support 
                  possibilities</span> with their external services.</h2>
                </div>
              </section>
              <section id="details">
                <div className="content">
                  <h3 className="darkgray">Welcome screen</h3>
                  <h2 className="green margin-bottom">The welcome screen shows <span className="redText">news</span> that the company wants to reach its customers as well as 
                  information about <span className="redText">shipping</span>, <span className="redText">open purchase</span> and <span className="redText">sizes</span>.</h2>
                  <div className="row-content">
                    <article>
                      <img src={ingridsHome} alt="welcome" />
                    </article>
                  </div>
                  <h3 className="darkgray">The account</h3>
                  <h2 className="green margin-bottom"><span className="redText">Orders</span> that a customer have made can be reached on their own personal <span className="redText">account page</span>.</h2>
                  <div className="row-content">
                    <article>
                      <img src={ingridsOrders} alt="orders" />
                    </article>
                  </div>
                  <h3 className="darkgray">The shop</h3>
                  <h2 className="green margin-bottom">The shop are divided into <span className="redText">categories</span> which can be reached from within all sections of the page. 
                  Products can be <span className="redText">filtered</span> with price and sizes. All products are shown with a <span className="redText">good description</span>.</h2>
                  <div className="row-content double-column">
                    <article>
                      <img src={ingridsShop} alt="shop" />
                    </article>
                    <article>
                      <img src={ingridsProduct} alt="product" />
                    </article>
                  </div>
                  <h3 className="darkgray">Cart and checkout</h3>
                  <h2 className="green margin-bottom">The <span className="redText">cart</span> screen shows an <span className="redText">accurate breakdown</span> of the products and prices. 
                  You can change the quantity or remove the product. The checkout screen shows information about your cart, shipping, 
                  voucher and <span className="redText">available payment methods</span>.</h2>
                  <div className="row-content double-column">
                    <article>
                      <img src={ingridsCart} alt="cart" />
                    </article>
                    <article>
                      <img src={ingridsCheckout} alt="checkout" />
                    </article>
                  </div>
                </div>
              </section>
              <section id="responsibilities" className="red">
                <div className="content">
                  <h1 className="main">Responsibilities</h1>
                  <h2 className="textOnRed">I worked on this project as a <span className="mainText">UI/UX designer</span> and <span className="mainText">Front-end developer</span>.<br/><br/>
                    Main areas of responsibility:<br/>
                    - <span className="mainText">Design</span> (webshop)<br/>
                    - <span className="mainText">Lo-fi prototyping</span> (basic flow and interactions)<br/>
                    - <span className="mainText">Front-end development</span> (webshop)
                  </h2>
                </div>
              </section>
              <section id="prototype">
                <div className="content">
                  <h1 className="darkgray">The webshop</h1> {/* "The webapp" can be the name instead of "The final prototype" */}
                  <h2 className="red">A webshop was developed. I still <span className="purpleText">managing updates</span> for the company when they are in need of help. 
                  If you want to take a look at the <span className="purpleText">current state</span> of the webshop, follow the link below!</h2>
                  {/* "Learn more about Ingrids" can be the name instead of "Let's meet together" on the button below */}
                  <div className="margin-top">
                    <Button 
                      color="purple"
                      buttonText= "Welcome to Ingrids" 
                      buttonHref="https://www.ingrids.nu/"
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

export default Ingrids;
