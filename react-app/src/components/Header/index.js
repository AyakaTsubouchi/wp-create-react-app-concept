import React, { useEffect, useState } from "react";
import { Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { navModal } from "../data";
import {rootUrl} from "../setting"


export default function Index(props) {
  const menu = props.menu;
  const parents = [];
  const [pmenu, setPmenu] = useState();
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalContents, setModalContents] = useState();

  const handleShow = (data) => {
    const id = data.ID
    setShow(true);
    setModalTitle(data.title);
    setModalContents(navModal[id])
  };


  useEffect(() => {
    makeMenuArr();
  }, [menu]);

  const makeMenuArr = () => {
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
    <header className="row">
      <div className="col-lg-8 d-flex">
        <div className="logo">
          <Link to="/">
            <img
              src={rootUrl+"/wp-content/uploads/2021/10/logo.png"}
              alt="logo"
            />
          </Link>
        </div>
        <Nav>
          {pmenu
            ? pmenu.map((item) => {
                if (item.children.length < 1) {
                  return (
                    <Nav.Item>
                      <Link
                        to={item.url.substr(rootUrl.length, item.url.length)}
                      >
                        {item.title}
                      </Link>
                    </Nav.Item>
                  );
                } else {
                  return (
                    <NavDropdown title={item.title} id="nav-dropdown-1">
                      {item.children.map((childItem) => {
                        let hasGrandChildren = childItem.classes.find(
                          (item) => item === "hasGrand"
                        );
                        if (
                          childItem.menu_item_parent !== 0 &&
                          hasGrandChildren
                        ) {
                          return (
                            <>
                              <li>
                                <a
                                  onClick={() => {
                                    handleShow(childItem);
                                  }}
                                >
                                  {childItem.title}
                                </a>
                              </li>
                              <Modal
                                show={show}
                                animation={false}
                                backdrop={true}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>{modalTitle}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="row">
                                  {
                                    modalContents? modalContents.map(content=>(
                                      <div className="col-lg-4">
                                      <h5 className="ggreen">
                                        {content.title}
                                      </h5>
                                      {content.imgUrl? <img src={content.imgUrl} alt="solution"/>: null}
                                      <p>
                                       {content.contents}
                                      </p>
                                      <a href={content.link} className="accent-button">
                                        Learn More
                                      </a>
                                    </div>
                                    )) :null
                                  }
                                  </div>
                                </Modal.Body>
                                <Modal.Footer></Modal.Footer>
                              </Modal>
                            </>
                          );
                        } else {
                          return (
                            <Link
                              to={childItem.url.substr(
                                rootUrl.length,
                                childItem.url.length
                              )}
                            >
                              {item.title}
                            </Link>
                          );
                        }
                      })}
                    </NavDropdown>
                  );
                }
              })
            : null}
        </Nav>
      </div>
      <div className="col-lg-4 buttons d-flex justify-content-end">
        <hr />
        <a href="#" className="login">
          Login
        </a>
        <div className="custom-btn">
          <a href="#" className="green-button">
            Request a demo
          </a>
        </div>
      </div>
    </header>
  );
}
