import React, { Component } from 'react';
import './App.css';
import BookContainer from './BookContainer';
import Login from './Login';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      You're lost, will you even be found?
    </div>
    )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/books" component={BookContainer}/>
          <Route component={My404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
