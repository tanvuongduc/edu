import React, { Component, Fragment } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
        };
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

    toggleLike() {
        this.setState({
            isLiked: !this.state.isLiked,
        })
    }

    render() {
        let style = {
            width: '500px',
            border: 'solid 1px #000',
            borderRadius: '3px',
            padding: '20px',
            backgroundColor: this.state.isLiked ? '#3a3a3a' : '#e87676',
            color: '#fff'
        }
        return (
            <Fragment>
                <div style={style}>
                    <h1>Đức Tân</h1>
                    <br></br>
                    <p>Hôm nay trời đẹp quá</p>
                    <br></br>
                    <br></br>
                    <p>1000 like</p>
                    <button onClick={() => this.toggleLike()}>Like</button>
                </div>
            </Fragment>
        )
    }
}

export default Card