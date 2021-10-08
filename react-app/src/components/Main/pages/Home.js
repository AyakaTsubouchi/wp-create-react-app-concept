import React, { Component } from "react";
import styled from "styled-components";
import "../../css/Home.css";

class Home extends Component {
  render() {
    return (
      <>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div> */}
        <div className="home">
          <img
            className="hero-bg1"
            src="http://localhost:8888/wp-content/uploads/2021/10/Screen-Shot-2021-10-07-at-5.07.23-PM.png"
          />
          <img
            className="hero-bg2"
            src="http://localhost:8888/wp-content/uploads/2021/10/Screen-Shot-2021-10-07-at-5.07.59-PM.png"
          />
          <img
            className="hero-bg3"
            src="http://localhost:8888/wp-content/uploads/2021/10/Background-graphic-right-side.png"
          />
          <section className="hero-section">
            <div className="container row mx-auto">
              <div className="col-lg-6 col-sm-12">
                <div className="text-container">
                  <h2>Reach new levels by bringing your business online</h2>
                  <p>
                    Goopter’s comprehensive e-commerce solution helps
                    restaurants and retail stores do more in less time by
                    reaching new customers and automating sales.
                  </p>
                  <div className="links d-flex">
                    <a href="#" className="green-button">
                      Request a demo
                    </a>
                    <a href="#" className="gaccent">
                      How it works
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img
                  src="http://localhost:8888/wp-content/uploads/2021/10/Group-41.png"
                  alto="goopter"
                  style={{ width: "80%", margin: "0 auto" }}
                />
              </div>
            </div>
          </section>
          <section className="howGoopter">
            <img
              className="hg-bg4"
              src="http://localhost:8888/wp-content/uploads/2021/10/Background-graphic-left-side.png"
              alto="background"
            />
            <div className="container">
              <div className="header">
                <h3>How Goopter works</h3>
                <p>
                  Watch this introductory video to find out what Goopter is all
                  about!
                </p>
              </div>
              <div className="slider">contents</div>
            </div>
          </section>
          <section className="softwareSlution">
            <div className="container">
              <div className="header">
                <h3>Software Solution</h3>
                <p className="ggreen">Ecommerce platform</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12"></div>
              </div>
            </div>
          </section>
          <section className="hardwareSlution">
            <div className="header">
              <h3>Hardware Solution</h3>
              <p className="ggreen">Delivery and Service Robots</p>
            </div>
            <div className="contents">
              <div className="container row">
                <div className="col-lg-4 col-sm-12 p-3">
                  <div className="card">contents1</div>
                </div>
                <div className="col-lg-4 col-sm-12 p-3">
                  <div className="card">contents1</div>
                </div>
                <div className="col-lg-4 col-sm-12 p-3">
                  <div className="card">contents1</div>
                </div>
              </div>
            </div>
          </section>
          <section className="isGoopter">
            <div className="header">
              <h3>Is Goopter right for you?</h3>
              <p>
                There are endless possibilities to transform your business with
                Goopter.
              </p>
              <p className="gaccent">
                Read how others have integrated Goopter into their businesses.
              </p>
            </div>

            <div className="contents">
              <div className="container  row mx-auto">
                <ul className="contentsNav col-lg-3 col-sm-12">
                  <li>Restaurant</li>
                  <li>Automated Dining</li>
                  <li>Retail Stores</li>
                  <li>Movie Theatres</li>
                  <li>Casinos</li>
                </ul>
                <div className="contentsDesc col-lg-9 col-sm-12">
                  <div className="card">
                    <h4>Use case 1:</h4>
                    <h4>Restaurants</h4>
                    <p>
                      Goopter gives restaurants the ability to process orders
                      online. Save time by letting your customers order and pay
                      on their mobile devices. Send your customers real-time
                      order updates to ensure a smooth pick up and delivery
                      process. Your staff will take orders with ease with
                      Goopter’s simple POS interface. Send orders directly to
                      your kitchen printers and cut down on time spent manually
                      inputting orders. Our all-in-one system provides
                      intelligent & seamless support for dine-in, pick up and
                      delivery orders from a single touchpoint.
                    </p>
                    <a href="#" className="gaccent">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="whatSets">
            <div className="header">
              <h3>What sets us apart</h3>
              <p>
                Goopter offers more for less compared to third-party
                alternatives
              </p>
              <p className="gaccent">Risk-Free | Non-Obligation payment</p>
            </div>
            <div className="contents container row mx-auto">
              <div className="col-lg-6 col-sm-12">
                <h3 className="ggreen">Goopter</h3>
                <p>
                  You get access to our entire platform and all its features for
                  no extra cost
                </p>
                <ul>
                  <li>Direct ordering from your website</li>
                  <li>Your customers, your relationships, your data</li>
                  <li>
                    Streamline order processing. Integration with existing
                    computers and printers
                  </li>
                  <li>Nominal service fees</li>
                  <li>Payment sent right to your account without hold</li>
                  <li>No download required</li>
                </ul>
                <div className="buttons">
                  <div className="btn green-button">
                    <a href="#" className="text-white">
                      View detailed feature-list
                    </a>
                  </div>
                  <a href="#" className="ggreen">
                    View pricing options
                  </a>
                </div>
                <p className="weaker">
                  All plans include: 30 day money-back guarantee • 24/7
                  telephone support • FREE setup • Multi-language support
                </p>
              </div>
              <hr className="devider" />
              <div className="col-lg-6 col-sm-12 right-box">
                <h3>With third-party alternatives...</h3>
                <ul>
                  <li>No custom domains</li>
                  <li>Ordering is done through third-party channels.</li>
                  <li>Do not own customer records</li>
                  <li>Manual input of order information</li>
                  <li>Requires download and registration</li>
                  <li>Payments are held for days to weeks </li>
                </ul>
                <ul>
                  On top of that ...
                  <li>15-25% comission fees</li>
                  <li>Payment for add-ons</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="waitingFor">
            <div className="header">
              <h3>What are you waiting for?</h3>
              <p>Take your business to the next level</p>
            </div>
            <div className="contents">
              <img src="http://localhost:8888/wp-content/uploads/2021/10/Final-CTA-Icon.svg" />
              <p>
                Try for free and see how Goopter can revolutionize your
                business.
              </p>
              <a className="accent-button">Request a free demo</a>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
