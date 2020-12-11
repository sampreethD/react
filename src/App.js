import React from "react";
import "./styles.css";

//lesson no.1 - Function name should start with caps if you are using as a component
//lesson no.2 - default is for some reason, don't ignore. (default) is stating we are exporting single class/function.
//lesson no.3 - jsx expression must have one parent element hence div tag.
//lesson no.4 - class components will have props property by default from React.component.Can be accessed by this.
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h2>Clock</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
