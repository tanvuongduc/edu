import React, { Component, Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/home';
import Videos from './components/videos/videos';
import NavBar from './components/nav-bar/nav-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="main">
            <NavBar data={this.state.navData} action={this.sayHello}></NavBar>

            <Suspense fallback={
              <h1>not found</h1>
            }>
              <Switch>
                <Redirect exact from="/" to="home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/videos" component={Videos} />
              </Switch>
            </Suspense>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App