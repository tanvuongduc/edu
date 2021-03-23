import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import LogoImg from '../../assets/logo.png';

class NavBar extends Component {
    constructor(props) {

        super(props);
        // console.log('aaaaaaaaaaaaaaaaaaaaa', props)
        this.state = {
            textSearch: '',
            language: 'SP'
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


    goTo = (url = '') => {
        this.props.history.push(url);
    }


    render() {
        let { textSearch } = this.state;
        // let textSearch = this.state.textSearch;
        return (
            <Fragment>
                <div className="navBar">
                    <div className="logo">
                        <img width="50px" src={LogoImg}></img>
                    </div>
                    <div className="searchBox">
                        <input type="text" placeholder="Search Facebook" value={textSearch} onChange={(ev) => this.onSerchChange(ev)}></input>
                    </div>

                    <div className="navGroup">
                        <button className="btnNav" onClick={() => this.goTo('/home')}>Home</button>
                        <button className="btnNav" onClick={() => this.goTo('/videos')}>Videos</button>
                        <button className="btnNav">Shop</button>
                        <button className="btnNav">Groups</button>
                        <button className="btnNav">Gaming</button>
                    </div>
                    <select value={this.state.language}>
                        <option value="EN">EN</option>
                        <option value="VN">VN</option>
                        <option value="SP">SP</option>
                    </select>
                    <div className="btnInfo">
                        <button onClick={() => {
                            return this.props.action()
                        }}>{this.props.data.userName}</button>
                    </div>
                    <button onClick={()=>console.log('aaaaaa', this.state)}>test</button>

                </div>
            </Fragment>
        )
    }

    onSerchChange(ev) {
        // console.log('1111111111', ev);
        // this.state.textSearch = ev.target.value;
        this.setState({
            textSearch: ev.target.value
        })

    }
}

export default withRouter(NavBar)