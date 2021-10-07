import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
        };
    }

    getAllPages = async () => {
        let res = axios.get("http://localhost:8888/wp-json/wp/v2/pages");

        let { data } = await res;

        this.setState({
            pages: data,
        });
        console.log(data);
    };

    componentDidMount = async () => {
        await this.getAllPages();
    };

    render() {
        return (
            <Router>
                <Main data={this.state} />
                <Footer data={this.state} />
            </Router>
        );
    }
}

export default App;
