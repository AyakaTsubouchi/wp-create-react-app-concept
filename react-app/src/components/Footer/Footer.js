import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";
import {rootUrl} from "../setting"

export default function Footer(props) {
  const footer = props.footer;
  const footer2= props.footer2;
  const [footerArr, setFooterArr] = useState();
  const [footer2Arr, setFooter2Arr] = useState();
  useEffect(() => {
    makeMenuArr(footer,setFooterArr);
    makeMenuArr(footer2,setFooter2Arr);
   
  }, [footer,footer2]);

  const makeMenuArr = (menu=footer,setPmenu) => {
    const parents = [];
    menu.map((item) => {
      //  find parents
      if (item.menu_item_parent === "0") {
        item.children = [];
        parents.push(item);
      }
    });
    //  find childredn and assign it to corresponding parrent
    menu.map((item) => {
      if (item.menu_item_parent != "0") {
        parents.map((parent) => {
          if (item.menu_item_parent === parent.ID.toString()) {
            parent.children.push(item);
          }
        });
      }
    });
    //how to find grand children
    setPmenu(parents);
  };

  return (
    <div className="footer">
  
      <div className="container row">
        <div className="logo col-lg-2">
          <img
            src={rootUrl+"/wp-content/uploads/2021/10/logo.png"}
            alto="logo"
          />
        </div>
        <div className="col-lg-10">
          <div className="row">
            {footerArr
              ? footerArr.map((item) => (
                  <div className="col-lg-3">
                    <h5>{item.title}</h5>
                    <ul>
                      {item.children.length > 0
                        ? item.children.map((childItem) => (
                            <li>
                              <a href={childItem.url}>{childItem.title}</a>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                ))
              : null}
            <div className="col-lg-3">
              <h5>Newsletter</h5>
              <p>
                Stay up to date with our latest news and product releases by
                signing up to our newsletter.
              </p>
              <form action="">
                <div className="form-group d-flex">
                  <input type="text" />
                  <button className="green-button" type="submit">
                    Submit
                  </button>
                  {/* <input className="green-button" type="submit" /> */}
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
          {footer2Arr
              ? footer2Arr.map((item) => (
                  <div className="col-lg-3">
                    <h5>{item.title}</h5>
                    <ul>
                      {item.children.length > 0
                        ? item.children.map((childItem) => (
                            <li>
                              <a href={childItem.url}>{childItem.title}</a>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                ))
              : null}
            <div className="col-lg-3">
              <h5>Follow Us</h5>
              <div className="icons">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
