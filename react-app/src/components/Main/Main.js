import React, { Component } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contacts from "./pages/Contacts";
// import Pages from "./pages/Pages";
import ExamplePage from "./pages/ExamplePage";
import Home from "./pages/Home";
import Header from "../Header"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    // console.log(this.props.pages);
    console.log(this.props);
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <Router>
          {data.pages.map((page, index) => {
            return (
              <Link
                to={`${page.slug}`}
                key={index}
                style={{ marginLeft: "10px" }}
              >
                {page.slug}
              </Link>
            );
          })}
          <Header/>
          <Switch>
            {data.pages.map((page, index) => {
              return (
                <>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route
                    exact
                    key={index}
                    path={`/${page.slug}`} //ayaka's local
                    // path={`/wp-test/${page.slug}`}
                    render={(props) => <ExamplePage {...props} page={page} />}
                  />
                </>
              );
            })}
          </Switch>
        </Router>
      </>
    );
    // <Home data={this.props.data} />;
  }
}

export default Main;
