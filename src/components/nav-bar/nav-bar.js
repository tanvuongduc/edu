import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import LogoImg from '../../assets/logo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        // Lấy dât từ Server
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Fragment>
                <div className="navBar">
                    <div className="logo">
                        <img width="50px" src={LogoImg}></img>
                    </div>
                    <div className="btnInfo">
                        <button onClick={() => {
                            return this.props.action()
                        }}>{this.props.data.userName}</button>
                    </div>
                    <button onClick={() => console.log('aaaaaa', this.state)}>test</button>

                </div>
            </Fragment>
        )
    }
}

export default withRouter(NavBar)