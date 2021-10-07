import React, { Component } from "react";

class Home extends Component {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>;
    }
}

export default Home;
