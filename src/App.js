import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Avatar from './components/Avatar'
import Greeting from './components/Greeting'
import './App.scss';

const user = {
  firstName: 'Pulie',
  lastNAme: 'Vera Pavez',
  avatar: 'https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting firstName={user.firstName} />
        <Avatar picture={user.avatar} />
      </div>
    );
  }
}
export default hot(module)(App);
