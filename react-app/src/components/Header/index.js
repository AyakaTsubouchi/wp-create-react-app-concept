import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function index() {
  return (
    <header className="row">
      <div className="col-lg-4">
        <Link to="/"><img src="http://localhost:8888/wp-content/uploads/2021/10/logo.png" alto="logo"/></Link>
      </div>
      <Nav className="col-lg-8">
        <NavDropdown title="Products" id="nav-dropdown">
          <NavDropdown
            className="row"
            title="Software Platform"
            id="nav-dropdown-1"
          >
            <div className="solition col">
              <h4>Acquire New Customers</h4>
              <p>Grow your customer base and fain recognition online</p>
              <Link to="/contact">Learn more</Link>
            </div>
            <div className="solition col">
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
    </header>
  );
}
