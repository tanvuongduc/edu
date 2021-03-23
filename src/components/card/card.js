import React, { Component, Fragment } from 'react';

class Card extends Component {
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
                <div style={
                    {
                        width: '500px',
                        border: 'solid 1px #000',
                        borderRadius: '3px',
                        padding: '20px',
                        backgroundColor: '#3a3a3a',
                        color: '#fff'
                    }
                }>
                    <h1>Đức Tân</h1>
                    <br></br>
                    <p>Hôm nay trời đẹp quá</p>
                    <br></br>
                    <br></br>
                    <p>1000 like</p>
                </div>
            </Fragment>
        )
    }
}

export default Card