import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>This is Home</h1>
        )
    }
}

export default withRouter(Home)