import React, { Component } from "react";

class Contacts extends Component {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>;
    }
}

export default Contacts;
