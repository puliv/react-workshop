import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialNum: 0,
      sum: '+',
      rest: '-',
      restart: 0,
      initialColor: '#000',
      sumColor: '#A64793',
      restColor: '#2594BE',
      restartColor: '#52D78E'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps, operation) {
    const{initialColor, sum, rest, restart, sumColor, restColor, restartColor } = this.state

    if (prevProps.initialColor !== initialColor && operation === sum) {
      this.setState({
        initialColor: sumColor
      })
    } else if (prevProps.initialColor !== initialColor && operation === rest) {
      this.setState({
        initialColor: restColor
      })
    } else if (prevProps.initialColor !== initialColor && operation === restart) {
      this.setState({
        initialColor: restartColor
      })
    }
  }

  handleClick(operation) {
    const { initialNum, sum, rest, restart, sumColor, restColor, restartColor } = this.state

    if (operation === sum) {
      this.setState({
        initialNum: initialNum + 1,
        initialColor: sumColor
      })
    } else if (operation === rest) {
      this.setState({
        initialNum: initialNum - 1,
        initialColor: restColor
      })
    } else if (operation === restart) {
      this.setState({
        initialNum: restart,
        initialColor: restartColor
      })
    }
  }


  render() {
    const { initialNum, sum, rest, restart, initialColor, sumColor, restColor, restartColor  } = this.state

    return (
      <div className="App">
        <h1>Contador:</h1>
        <h3 style={{ color: initialColor, fontSize: '30px', fontWeight: 'bolder' }}>{initialNum}</h3>
        <button
          type='button'
          onClick={() => this.handleClick(sum)}
          style={{ fontSize: '20px', color:'#fff',backgroundColor: sumColor, borderColor: sumColor }} >Sumar</button>
        <button
          type='button'
          onClick={() => this.handleClick(rest)}
          style={{ fontSize: '20px', marginLeft: '10px', color:'#fff', backgroundColor: restColor, borderColor: restColor }} >Restar</button>
        <button
          type='button'
          onClick={() => this.handleClick(restart)}
          style={{ fontSize: '20px', marginLeft: '10px', color:'#fff', backgroundColor: restartColor, borderColor: restartColor }} >Restart</button>
      </div>
    );
  }
}
export default hot(module)(App);
