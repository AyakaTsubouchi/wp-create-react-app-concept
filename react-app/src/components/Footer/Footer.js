import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container row">
          <div className="logo col-lg-2">
            <img
              src="http://localhost:8888/wp-content/uploads/2021/10/logo.png"
              alto="logo"
            />
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-3">
                <h5>Software Solution</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Uses cases</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Resources</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Newsletter</h5>
                <p>
                  Stay up to date with our latest news and product releases by
                  signing up to our newsletter.
                </p>
                <form action="" >
                  <div className="form-group d-flex">
                    <input type="text"/>
                    <button className="green-button" type="submit">Submit</button>
                    {/* <input className="green-button" type="submit" /> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3">
                <h5>Software Solution</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Uses cases</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Resources</h5>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h5>Follow Us</h5>
                <div className="icons">
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
