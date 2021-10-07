import React, { Component } from "react";

class About extends Component {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>;
    }
}

export default About;
