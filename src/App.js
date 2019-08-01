import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

const user = {
  firstName: 'Luis',
  lastName: 'Fuenmayor',
  avatar: 'http://olegif.com/bin/gifs/00/25/06.gif',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting firstName={user.firstName} lastName={user.lastName} />
        <Avatar picture={user.avatar} />
      </div>
    );
  }
}

export default hot(module)(App);
