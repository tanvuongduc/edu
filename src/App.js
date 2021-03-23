import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import Card from './components/card/card';
import Home from './components/home/home';
import Videos from './components/videos/videos';
import NavBar from './components/nav-bar/nav-bar';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData,
      navData,
    };
  }

  checkLogin() {
    console.log('aaaaaaaaaaaaaaa');
    return false;
  }

  test() {
    this.state.feedData[0].author = 'Cat'
    this.setState(this.state)
  }

  sayHello() {
    alert('Hello');
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="main">
            <NavBar data={this.state.navData} action={this.sayHello}></NavBar>

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

            {this.state.feedData.map(el => {
              return (
                <Fragment>
                  <Card data={el}></Card>
                  <br></br>
                  <br></br>
                </Fragment>

              )
            })}
            <button onClick={() => this.test()}>test</button>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App