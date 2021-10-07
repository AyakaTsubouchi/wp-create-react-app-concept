import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";

export default function index() {
  return (
    <header className="row container">
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
          <NavDropdown title="Products" id="nav-dropdown">
            <NavDropdown
              title="Software Platform"
              id="nav-dropdown-1"
            >
              <div className="solition">
                <h4>Acquire New Customers</h4>
                <p>Grow your customer base and fain recognition online</p>
                <Link to="/contact">Learn more</Link>
              </div>
              <div className="solition">
                <h4>Acquire New Customers</h4>
                <p>Grow your customer base and fain recognition online</p>
                <Link to="/contact">Learn more</Link>
              </div>
              <div className="solition col">
                <h4>Acquire New Customers</h4>
                <p>Grow your customer base and fain recognition online</p>
                <Link to="/contact">Learn more</Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Hardware Solutions" id="nav-dropdown-1">
              <div className="solition col">
                <h4>Delivery Robot 1</h4>
                <p>Grow your customer base and fain recognition online</p>
                <Link to="/contact">Learn more</Link>
              </div>
            </NavDropdown>
          </NavDropdown>
          <NavDropdown title="Use cases" id="use-cases">
            <NavDropdown.Item>
              <Link to="/">Use cases</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Link to="/">Pricing</Link>
          </Nav.Item>
          <NavDropdown title="Resources" id="use-cases">
            <NavDropdown.Item>Resources</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Company" id="use-cases">
            <NavDropdown.Item>Company</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
      <div className="col-lg-4 buttons d-flex justify-content-end">
      <hr/>
        <a href="#" className="login">
          Login
        </a>
        <div className="custom-btn">
          <a href="#" className="green-button">Request a demo</a>
        </div>
      </div>
    </header>
  );
}
