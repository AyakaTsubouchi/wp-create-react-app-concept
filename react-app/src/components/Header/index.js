import React, { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Index(props) {
  const menu = props.menu;
  const rootUrl = "http://localhost:8888";
  const parents = [];
  const [pmenu, setPmenu] = useState();
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
        setPmenu(parents);
      }
    });
  };
  // const showMenu = (menu) => {
  //   if (menu===undefined) {
  //     return;
  //   } else {
  //     menu.map((item) => {
  //       if (item.children.length > 0) {
  //         <NavDropdown title={item.title} id="nav-dropdown">
  //           {item.children.map((item) => {
  //             if (item.children.length > 0) {
  //               <NavDropdown title={item.title} id="nav-dropdown">
  //                 {item.children.map(<Link to="#">{item.title}</Link>)}
  //               </NavDropdown>;
  //             } else {
  //               <Link to="#">{item.title}</Link>;
  //             }
  //           })}
  //         </NavDropdown>;
  //       } else {
  //         <Link to="#">{item.title}</Link>;
  //       }
  //     });
  //   }
  // };
  const showMenu = () => {
   
      
      pmenu.map((item) => <li>{item.title}</li>);
  
  };

  return (
    <header className="row">
      {console.log("parents", pmenu)}
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
          {pmenu? pmenu.map((item) => {
            if(item.children.length < 1){
            return <Nav.Item>
            <Link to={item.url.substr(rootUrl.length,item.url.length)}>{item.title}</Link>
          </Nav.Item>
            }else{
              return <NavDropdown
              title={item.title}
              id="nav-dropdown-1"
            >
              {/* {
                item.children.map(item=>{
                  if(item.children.length < 1){
            return <li>{item.title}</li>
            }else{
              return  <NavDropdown
              title={item.title}
              id="nav-dropdown-1"
            > </NavDropdown>
            }
                })
              } */}
            </NavDropdown>
            }
            }) :null}
          {/* <NavDropdown title="Products" id="nav-dropdown">
         
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
          </NavDropdown> */}
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
