import React, { Component } from "react";

class ExamplePage extends Component {
    render() {
        const { content } = this.props.page;
        console.log(content);
        return (
        <>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>

        </>);
    }
}

export default ExamplePage;
