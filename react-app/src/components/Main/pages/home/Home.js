import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../css/Home.css";
import { softwareSlution, useCaseData,navModal } from "../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {rootUrl} from "../../../setting"


const Home = () => {
  const [useCase, setUseCase] = useState("Restaurant");
  const [description, setDescription] = useState(useCaseData[0].desc);
  const [id, setId] = useState(useCaseData[0].id);
  const hardwareSlutionData = navModal["6866"];

  useEffect(() => {
    showUseCases();
  }, [useCase]);

  const showUseCases = () => {
    useCaseData.map((item) =>
      item.title === useCase ? setDescription(item.desc) : null
    );
    useCaseData.map((item) => (item.title === useCase ? setId(item.id) : null));
  };

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div> */}
      <div className="home">
        <img
          className="hero-bg1"
          src={rootUrl+"/wp-content/uploads/2021/10/Screen-Shot-2021-10-07-at-5.07.23-PM.png"}
        />
        <img
          className="hero-bg2"
          src={rootUrl+"/wp-content/uploads/2021/10/Screen-Shot-2021-10-07-at-5.07.59-PM.png"}
        />
        <img
          className="hero-bg3"
          src={rootUrl+"/wp-content/uploads/2021/10/Background-graphic-right-side.png"}
        />
        <section className="hero-section">
          <div className="container row mx-auto">
            <div className="col-lg-6 col-sm-12">
              <div className="text-container">
                <h2>Reach new levels by bringing your business online</h2>
                <p>
                  Goopter’s comprehensive e-commerce solution helps restaurants
                  and retail stores do more in less time by reaching new
                  customers and automating sales.
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
                src={rootUrl+"/wp-content/uploads/2021/10/Group-41.png"}
                alto="goopter"
                style={{ width: "80%", margin: "0 auto" }}
              />
            </div>
          </div>
        </section>
        <section className="howGoopter">
          <img
            className="hg-bg4"
            src={rootUrl+"/wp-content/uploads/2021/10/Background-graphic-left-side.png"}
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

            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={rootUrl+"/wp-content/uploads/2021/10/Slider-Image-Analytics.png"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={rootUrl+"/wp-content/uploads/2021/10/Slider-Image-Available-on-all-platforms.png"}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={rootUrl+"/wp-content/uploads/2021/10/Slider-Image-Consumer-Mobile-Apps.png"}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section className="softwareSlution">
          <div className="container">
            <div className="header">
              <h3>Software Solution</h3>
              <p className="ggreen">Ecommerce platform</p>
            </div>
            {softwareSlution.map((item) => {
              if (item.id % 2 !== 0) {
                return (
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 text-wrapper">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.text}</p>
                      <p>{item.text}</p>
                      <div className="btn-wrapper text-center">
                        <a className="accent-button">Request a free demo</a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <img src={item.img} alt="" />
                      <ul>
                        {item.benefit.map((menu) => (
                          <li>
                            <span className="gaccent">
                              <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                            {menu.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <img src={item.img} alt="" />
                      <ul className="">
                        {item.benefit.map((menu) => (
                          <li>
                            <span className="ggreen">
                              <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                            {menu.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-wrapper">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="btn-wrapper text-center">
                        <a className="green-button">Request a free demo</a>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section className="hardwareSlution">
          <div className="header">
            <h3>Hardware Solution</h3>
            <p className="ggreen">Delivery and Service Robots</p>
          </div>
          <div className="contents">
            <div className="container row mx-auto">
              {hardwareSlutionData
                ? hardwareSlutionData.map((content) => (
                    <div className="col-lg-4 col-sm-12 p-3">
                      <div className="card">
                        <h5 className="ggreen">{content.title}</h5>
                        {content.imgUrl ? (
                          <img src={content.imgUrl} alt="solution" />
                        ) : null}
                        <p>{content.contents}</p>
                        <a href={content.link} className="accent-button">
                          Learn More
                        </a>
                      </div>
                    </div>
                  ))
                : null}
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
                {useCaseData.map((item) => (
                  <a
                    key={item.id}
                    onClick={() => {
                      setUseCase(item.title);
                    }}
                  >
                    <li>{item.title}</li>
                  </a>
                ))}
              </ul>
              <div className="contentsDesc col-lg-9 col-sm-12">
                <div className="card">
                  <h4>Use case {id}:</h4>
                  <h4>{useCase}</h4>
                  <p>{description}</p>
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
              Goopter offers more for less compared to third-party alternatives
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
                All plans include: 30 day money-back guarantee • 24/7 telephone
                support • FREE setup • Multi-language support
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
            <img src={rootUrl+"/wp-content/uploads/2021/10/Final-CTA-Icon.svg"} />
            <p>
              Try for free and see how Goopter can revolutionize your business.
            </p>
            <a className="accent-button">Request a free demo</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
