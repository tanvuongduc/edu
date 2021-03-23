import React, { Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card/card';
import Home from './components/home/home';
import Videos from './components/videos/videos';
import NavBar from './components/nav-bar/nav-bar';
import reportWebVitals from './reportWebVitals';


// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

let navData = {
  userName: 'Văn Đức'
}

let feedData = [
  {
    author: 'Đức Tân',
    status: 'Hôm nay trời đẹp quá',
    likes: 1000,
    comments: [
      {
        author: 'Nam',
        comment: 'Chuẩn!'
      },
      {
        author: 'Bình',
        comment: 'Hay!'
      },
      {
        author: 'Nga',
        comment: 'Tuyệt vời!'
      },
    ]
  },
  {
    author: 'Thanh Nga',
    status: 'React thật dễ',
    likes: 100000,
    comments: [
      {
        author: 'Nam',
        comment: 'Chuẩn!'
      },
      {
        author: 'Bình',
        comment: 'Hay!'
      },
      {
        author: 'Tân',
        comment: 'Tuyệt vời!'
      },
    ]
  },
  {
    author: 'Nam',
    status: 'Props là data truyền từ component cha vào component con',
    likes: 10000,
    comments: [
      {
        author: 'Nam',
        comment: 'Chuẩn!'
      },
      {
        author: 'Bình',
        comment: 'Hay!'
      },
    ]
  },
  {
    author: 'Nguyên Bình',
    status: 'State là data của chính component đó',
    likes: 103409800,
    comments: [
      {
        author: 'Nam',
        comment: 'Chuẩn!'
      },
      {
        author: 'Bình',
        comment: 'Perfect!'
      },
    ]
  },
]

const App = (
  <BrowserRouter>
    <Fragment>
      <div className="main">
        <NavBar data={navData} action={sayHello}></NavBar>

        {/* <Suspense fallback={
          <h1>not found</h1>
        }>
          <Switch>
            <Redirect exact from="/" to="home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/videos" component={Videos} />
          </Switch>
        </Suspense> */}
        {/* <Card data={feedData}></Card> */}

        {feedData.map(el => {
          return (
            <Fragment>
              <Card data={el}></Card>
              <br></br>
              <br></br>
            </Fragment>

          )
        })}
        <button onClick={() => test()}>test</button>
      </div>
    </Fragment>
  </BrowserRouter>
);

function checkLogin(){
  console.log('aaaaaaaaaaaaaaa');
  return false;
}

function test() {
  feedData[0].author = 'hello world';
}

function sayHello() {
  alert('Hello');
}

ReactDOM.render(App, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
