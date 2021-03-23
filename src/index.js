import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card'
import reportWebVitals from './reportWebVitals';

const App = (
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
);

ReactDOM.render(App, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
