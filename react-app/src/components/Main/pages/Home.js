import React, { Component } from "react";
import styled from "styled-components";
import "../../css/Home.css"

class Home extends Component {
  render() {
    return (
      <>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div> */}
        <HeroSction>
          <div className="container row mx-auto">
            <div className="col-lg-6 col-sm-12">
              <TextContents>
                <H2>Reach new levels by bringing your business online</H2>
                <P>
                  Goopter’s comprehensive e-commerce solution helps restaurants
                  and retail stores do more in less time by reaching new
                  customers and automating sales.
                </P>
                <div className="links d-flex">
                  <CTAButton href="#">Request a demo</CTAButton>
                  <Atag href="#">How it works</Atag>
                </div>
              </TextContents>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src="http://localhost:8888/wp-content/uploads/2021/10/Group-41.png"
                alto="goopter"
                style={{ width: "80%", margin: "0 auto" }}
              />
            </div>
          </div>
        </HeroSction>
        <section className="howGoopter">
          <div className="container">
            <Header className="header">
              <h3>How Goopter works</h3>
              <p>
                Watch this introductory video to find out what Goopter is all
                about!
              </p>
            </Header>
            <div className="slider">contents</div>
          </div>
        </section>
        <section className="softwareSlution">
          <div className="container">
            <Header className="header">
              <h3>Software Solution</h3>
              <p>Ecommerce platform</p>
            </Header>
            <div className="row">
              <div className="col-lg-6 col-sm-12"></div>
              <div className="col-lg-6 col-sm-12"></div>
            </div>
          </div>
        </section>
        <section className="hardwareSlution">
          <div className="container">
            <Header className="header">
              <h3>Hardware Solution</h3>
              <p>Delivery and Service Robots</p>
            </Header>
          </div>
        </section>
        <section className="isGoopter">
          <div className="container">
            <Header className="header">
              <h3>Is Goopter right for you?</h3>
              <p>
                There are endless possibilities to transform your business with
                Goopter.
              </p>
              <p>
                Read how others have integrated Goopter into their businesses.
              </p>
            </Header>
            <div className="contents row">
              <ul className="contentsNav col-lg-4 col-sm-12"></ul>
              <div className="contentsDesc">
                <div className="card">
                  <h4>Use case 1:</h4>
                  <h4>Restaurants</h4>
                  <p>
                    Goopter gives restaurants the ability to process orders
                    online. Save time by letting your customers order and pay on
                    their mobile devices. Send your customers real-time order
                    updates to ensure a smooth pick up and delivery process.
                    Your staff will take orders with ease with Goopter’s simple
                    POS interface. Send orders directly to your kitchen printers
                    and cut down on time spent manually inputting orders. Our
                    all-in-one system provides intelligent & seamless support
                    for dine-in, pick up and delivery orders from a single
                    touchpoint.
                  </p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whatSets">
          <Header className="header">
            <h3>What sets us apart</h3>
            <p>
              Goopter offers more for less compared to third-party alternatives
            </p>
            <p>Risk-Free | Non-Obligation payment</p>
          </Header>
          <div className="contents container row">
            <div className="col-lg-6 col-sm-12">
              <h3>Goopter</h3>
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
                <CTAButton>View detailed feature-list</CTAButton>
                <a href="#">View pricing options</a>
              </div>
              <p>
                All plans include: 30 day money-back guarantee • 24/7 telephone
                support • FREE setup • Multi-language support
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h3>Goopter</h3>
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
          <Header>
            <h3>What are you waiting for?</h3>
          </Header>
        </section>
      </>
    );
  }
}

export default Home;

const HeroSction = styled.section`
  background: url("http://localhost:8888/wp-content/uploads/2021/10/Screen-Shot-2021-10-06-at-8.57.13-PM.png");
  background-size: cover;
  background-repeat: none;
  height: 90vh;
  margin: 0px auto;
  padding: 60px 30px;
`;
const TextContents = styled.div`
  padding-top: 10%;
`;
const H2 = styled.h2`
  font-size: 42px;
`;
const P = styled.p`
  font-size: 18px;
`;
const CTAButton = styled.a`
  background-color: #11b7b5;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  margin: 10px;
`;
const Atag = styled.a`
  color: red;
  padding: 6px 7px;
  margin: 10px;
`;

const Header = styled.div``;
