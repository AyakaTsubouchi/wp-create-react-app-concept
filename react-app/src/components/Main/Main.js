import React, { Component } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contacts from "./pages/Contacts";
// import Pages from "./pages/Pages";
import ExamplePage from "./pages/ExamplePage";
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
                            <Link to={`${page.slug}`} key={index} style={{ marginLeft: "10px" }}>
                                {page.slug}
                            </Link>
                        );
                    })}

                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/pages">Pages</Link> */}

                    <Switch>
                        {data.pages.map((page, index) => {
                            return (
                                <Route
                                    exact
                                    key={index}
                                    // path={`/${page.slug}`} //ayaka's local
                                    path={`/wp-test/${page.slug}`}
                                    render={(props) => <ExamplePage {...props} page={page} />}
                                />
                            );
                        })}
                        {/* <Route path="/" exact>
                            <Home data={this.props.data.home} />
                        </Route>
                        <Route path="/about" exact>
                            <About data={this.props.data.about} />
                        </Route>
                        <Route path="/contacts" exact>
                            <Contacts data={this.props.data.contact} />
                        </Route>
                        <Route path="/pages" exact>
                            <Pages pages={this.props.pages} />
                        </Route> */}
                        {/* <Route path="/contacts" component={Home} exact /> */}
                    </Switch>
                </Router>
            </>
        );
        // <Home data={this.props.data} />;
    }
}

export default Main;
