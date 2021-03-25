import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/home';
import Videos from './components/videos/videos';
import NavBar from './components/nav-bar/nav-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: {
        userName: 'Đức Tân',
      }
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="main">
            <NavBar data={this.state.navData} action={this.sayHello}></NavBar>
{'/home/villa'}
              <Switch>
                <Redirect exact from="/" to="home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/videos" component={Videos} />
              </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App