import React from "react";

/**
 * 2 ways to call a Method in class based component
 * 1. bind this with the function , this according to me is annoying beacuse if we have multiple fucntional calls we need to bind this to evenry function.
 * 2. call be callback
 */

export default class ClassEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  someotherFunction() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render() {
    return (
      <div>
        <h2 onClick={() => this.someotherFunction()}>Class Events</h2>
        <span>{this.state.counter}</span>
        <button onClick={() => this.handleClick()}>increment</button>
      </div>
    );
  }
}
