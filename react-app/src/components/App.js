import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";
import Main from "./Main/Main";
// import Footer from "./Footer/Footer";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            menu:[],
            footer:[],
            footer2:[]
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
    getMenu = async () => {
        let res = axios.get("http://localhost:8888/wp-json/wp/v2/menu");

        let { data } = await res;

        this.setState({
            menu: data,
        });
        console.log(data);
    };
    getFooter = async () => {
        let res = axios.get("http://localhost:8888/wp-json/wp/v2/footer");

        let { data } = await res;

        this.setState({
            footer: data,
        });
        console.log(data);
    };

    getFooter2 = async () => {
        let res = axios.get("http://localhost:8888/wp-json/wp/v2/footer2");

        let { data } = await res;

        this.setState({
            footer2: data,
        });
    };

    componentDidMount = async () => {
        await this.getAllPages();
        await this.getMenu();
        await this.getFooter();
        await this.getFooter2();
    };

    render() {
        return (
            <Router>
                <Main data={this.state} />
                {/* <Footer data={this.state} /> */}
            </Router>
        );
    }
}

export default App;
