import React, { Component } from "react";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div> */}
        <HeroSction>
          <div className="container row">
            <div className="col-lg-6 col-sm-12">
            <TextContents>
              <H2>Reach new levels by bringing your business online</H2>
              <P>
                Goopter’s comprehensive e-commerce solution helps restaurants
                and retail stores do more in less time by reaching new customers
                and automating sales.
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
                style={{width:"80%",margin:"0 auto"}}
              />
            </div>
          </div>
        </HeroSction>
      </>
    );
  }
}

export default Home;

const HeroSction = styled.section`
  background: url("http://localhost:8888/wp-content/uploads/2021/10/Screen-Shot-2021-10-06-at-8.57.13-PM.png");
  background-size: cover;
  background-repeat: none;
  height: 100vh;
  margin: 0px auto;
  padding: 30px;
`
const TextContents = styled.div`
    padding-top: 50%;
    transform: translateY(-200px);
`
const H2 = styled.h2`
font-size: 42px;
`
const P = styled.p`
font-size: 18px;
`
const CTAButton = styled.a`
  background-color: #11b7b5;
  color: white;
  padding: 6px 7px;
  border-radius: 8px;
  margin: 10px;
`;
const Atag = styled.a`
  color: red;
  padding: 6px 7px;
  margin: 10px;
`;
