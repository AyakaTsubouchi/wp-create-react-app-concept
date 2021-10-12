import React, { Component } from "react";

class Pages extends Component {
    render() {
        // console.log(this.props.pages.data);
        return (
            <div>
                PAGES
                {this.props.pages.data.map((page, index) => {
                    return <div>{`/${page.slug}`}</div>;
                })}
            </div>
        );
    }
}

export default Pages;
