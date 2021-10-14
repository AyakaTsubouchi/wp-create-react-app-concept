import React, { Component } from "react";
import ExamplePage from "./pages/ExamplePage";
import Home from "./pages/home/Home"
import Header from "../Header";
import Footer from "../Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Router>
          <Header menu={data.menu} />
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
                    path={`/${page.slug}`}
                    render={(props) => <ExamplePage {...props} page={page} />}
                  />
                </>
              );
            })}
          </Switch>
          <Footer footer={data.footer} footer2={data.footer2}/>
        </Router>
      </>
    );
    // <Home data={this.props.data} />;
  }
}

export default Main;
