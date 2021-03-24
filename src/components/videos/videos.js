import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>This is Videos</h1>
        )
    }
}

export default withRouter(Videos)