import React, { useEffect, useState } from "react";
import { Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { navModal } from "../data";

export default function Index(props) {
  const menu = props.menu;
  const rootUrl = "http://localhost:8888";
  const parents = [];
  const [pmenu, setPmenu] = useState();
  const [show, setShow] = useState(false);
  const [modalId, setModalId] = useState();
  const [modalTitle, setModalTitle] = useState();

  const handleShow = (data) => {
    setShow(true);
    setModalId(data.ID.toString());
    setModalTitle(data.title);
    // console.log("modal", navModal.modalId.contents);
  };

  useEffect(() => {
    makeMenuArr();
  }, [menu]);

  const makeMenuArr = () => {
    let submenuCounter = 0;
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
      {console.log("parents", pmenu)}
      {console.log("modalId", modalId)}
      <div className="col-lg-8 d-flex">
        <div className="logo">
          <Link to="/">
            <img
              src="http://localhost:8888/wp-content/uploads/2021/10/logo.png"
              alto="logo"
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
                                    console.log(typeof modalId);
                                  }}
                                >
                                  {childItem.title}
                                </a>
                              </li>
                              <Modal
                                show={show}
                                // onHide={handleClose}
                                animation={false}
                                backdrop={true}
                                onHide={() => setShow(false)}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>{modalTitle}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="row">
                                    <div className="col-lg-4 col-sm-2">
                                      <h5 className="ggreen">
                                        Acquire New Customers
                                      </h5>
                                      <p>
                                        Grow your customer base and gain
                                        recognition online. Goopter helps
                                        integrate your business with the top
                                        social platforms. Serve more guests with
                                        our multi-language platform.
                                      </p>
                                      <a href="#" className="accent-button">
                                        Learn More
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-sm-2">
                                      <h5 className="ggreen">
                                        Acquire New Customers
                                      </h5>
                                      <p>
                                        Grow your customer base and gain
                                        recognition online. Goopter helps
                                        integrate your business with the top
                                        social platforms. Serve more guests with
                                        our multi-language platform.
                                      </p>
                                      <a href="#" className="accent-button">
                                        Learn More
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-sm-2">
                                      <h5 className="ggreen">
                                        Acquire New Customers
                                      </h5>
                                      <p>
                                        Grow your customer base and gain
                                        recognition online. Goopter helps
                                        integrate your business with the top
                                        social platforms. Serve more guests with
                                        our multi-language platform.
                                      </p>
                                      <a href="#" className="accent-button">
                                        Learn More
                                      </a>
                                    </div>
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
