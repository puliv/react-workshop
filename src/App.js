import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Luis',
      lastName: 'Fuenmayor',
      avatar: 'http://olegif.com/bin/gifs/00/25/06.gif',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ firstName: 'Sergio Chayanne', lastName: 'Toro' });
  }

  render() {
    return (
      <div className="App">
        <Greeting firstName={this.state.firstName} lastName={this.state.lastName} />
        <Avatar picture={this.state.avatar} />
        <button type="button" onClick={this.handleOnClick}>
          Cambiar nombre
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
