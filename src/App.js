import React, { Component, Fragment } from 'react';
import './index.css';
import Card from './components/card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Card></Card>
        <br></br><br></br>
        <Card></Card>
        <br></br><br></br>
        <Card></Card>
        <br></br><br></br>
        <Card></Card>
        <br></br><br></br>
      </Fragment>
    )
  }
}

export default App