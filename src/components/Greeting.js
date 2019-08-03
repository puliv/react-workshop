import React, { Component } from 'react'

class Greeting extends Component {

  getGreeting(firstName) {
    return <h1>Hola, {firstName} </h1>
  }

  render() {
    const { firstName } = this.props
    return this.getGreeting(firstName)
  }
}

export default Greeting

