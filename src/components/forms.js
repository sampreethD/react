import React from "react";

//No idea how forms work in functional component at the moment.

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", age: "" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      name: event.target.value,
      age: event.target.value
    });
    console.log(this.state.name);
  }

  submitHandler(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h3>Forms</h3>
        <form onSubmit={this.submitHandler}>
          <label>Name:</label>
          <input onChange={this.changeHandler} value={this.state.name} />
          <label>Age:</label>
          <input onChange={this.changeHandler} value={this.state.age} />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
